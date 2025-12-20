'use client';

import { useEffect, useState } from 'react';
import { CONSTANTS } from '../../utils/constants';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import CreateList from '@/components/CreateList.jsx/CreateList';
import ListWrapper from '@/components/ListWrapper/ListWrapper';
import styles from './page.module.css';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [lists, setLists] = useState([]);
	const LIST = CONSTANTS.LIST;

	useEffect(() => {
		const storedList = getLocalStorage(LIST);
		if (storedList) setLists(storedList);
		setIsLoading(false);
	}, [LIST]);

	const removeSpaces = (str) => {
		return str.replace(/\s+/g, '');
	};

	const createId = (idData) => {
		const { title, lastId } = idData;

		const titleLength = title.length;
		const lastIdNumber = Number(lastId.slice(titleLength));
		const newId = title + (lastIdNumber + 1);
		return removeSpaces(newId);
	};

	const createList = (title) => {
		setLists((prev) => {
			const newList = [
				...prev,
				{
					title: title,
					//check to see that at least one item exists before incrementing id
					// otherwise give first item an id of 1
					listId: prev[0] ? prev[prev.length - 1].listId + 1 : 1,
					items: [],
				},
			];

			setLocalStorage(LIST, newList);

			return newList;
		});
	};

	const addListItem = (listId, item) => {
		setLists((prev) => {
			const listToUpdate = prev.find((list) => list.listId === listId);

			const newItemList = [
				...listToUpdate.items,
				{
					itemId: listToUpdate.items.length
						? createId({
								title: listToUpdate.title,
								lastId:
									listToUpdate.items[listToUpdate.items.length - 1].itemId,
						  })
						: listToUpdate.title + 1,
					data: item,
					checked: false,
				},
			];

			const newListofLists = prev.map((list) => {
				if (list.listId === listId) {
					return { ...list, items: newItemList };
				}
				return list;
			});

			setLocalStorage(LIST, newListofLists);
			return newListofLists;
		});
	};

	// this component only needs to render when I want to create sample data
	function SampleData() {
		return (
			<div className={styles.sampleData}>
				<button
					onClick={() => {
						setLists(sampleList);
						setLocalStorage(LIST, sampleList);
					}}
				>
					Load Sample List
				</button>
			</div>
		);
	}

	return (
		<div className={styles.page}>
			{/* <SampleData /> */}
			<header className={styles.header}>
				<h1>List App</h1>
				<CreateList createList={createList} />
			</header>
			<main>
				{!isLoading && !lists && <div>No list yet. Why not create one?</div>}
				<div>
					{isLoading
						? 'Retrieving list...'
						: lists && (
								<ListWrapper
									lists={lists}
									setLists={setLists}
									addListItem={addListItem}
								/>
						  )}
				</div>
			</main>
		</div>
	);
}

////////////////////////////////////////////
const sampleList = [
	{
		title: 'List',
		listId: 1,
		items: [
			{ itemId: 1, data: 'eggs', checked: false },
			{ itemId: 2, data: 'juice', checked: false },
			{ itemId: 3, data: 'cookies', checked: false },
			{ itemId: 4, data: 'salsa', checked: false },
			{ itemId: 5, data: 'salad', checked: false },
		],
	},
];
