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

	const createNewList = () => {
		setLists((prevState) => {
			const newList = [
				...prevState,
				{
					title: 'LIST',
					//check to see that at least one item exists before incrementing id
					// otherwise give first item an id of 1
					listId: prevState[0] ? prevState[prevState.length - 1].listId + 1 : 1,
					items: [],
				},
			];

			setLocalStorage(LIST, newList);

			return newList;
		});
	};

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

	const addListItem = (listId, item) => {
		setLists((prev) => {
			const listToUpdate = prev.find((list) => list.listId === listId);

			const createId = (title, lastId = title + 1) => {
				const titleLength = Number(title.length); // 4

				const idNumber = Number(lastId.slice(titleLength)); // 1
				const newId = title + (idNumber + 1);
				return newId;
			};

			const newItemList = [
				...listToUpdate.items,
				{
					itemId: listToUpdate.items.length
						? createId(
								listToUpdate.title,
								listToUpdate.items[listToUpdate.items.length - 1].itemId
						  )
						: // ? listToUpdate.items[listToUpdate.items.length - 1].itemId + 1
						  listToUpdate.title + 1,
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

			// console.log(newListofLists);

			setLocalStorage(LIST, newListofLists);
			return newListofLists;
		});
	};

	return (
		<div className={styles.page}>
			{/* <SampleData /> */}
			<header className={styles.header}>
				<h1>List App</h1>
				<CreateList createNewList={createNewList} />
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

const deleteListItem = (id) => {
	setList((prev) => {
		const updatedList = prev.filter((element) => element.id !== id);
		setLocalStorage(LIST, updatedList);
		return updatedList;
	});
};

const editListItem = (id, editedItem) => {
	setList((prev) => {
		const updatedList = prev.map((element) => {
			if (element.id === id) {
				return { id, data: editedItem };
			} else return element;
		});

		setLocalStorage(LIST, updatedList);
		return updatedList;
	});
};
