'use client';

import { useEffect, useState } from 'react';
import { CONSTANTS } from '../../utils/constants';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
// import ListForm from '@/components/Form/ListForm';
// import List from '@/components/List/List';
import ListWrapper from '@/components/ListWrapper/ListWrapper';
import styles from './page.module.css';
import CreateList from '@/components/CreateList.jsx/CreateList';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const LIST = CONSTANTS.LIST;

	const [lists, setLists] = useState(null);

	const createNewList = (data) => {
		setLists(data);

		// kind of like this:
		setLists((prevState) => {
			const newList = [
				...prevState,
				{
					title: 'TEST',
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

	useEffect(() => {
		const storedList = getLocalStorage(LIST);
		if (storedList) setLists(storedList);
		setIsLoading(false);
	}, [LIST]);

	const addListItem = (item) => {
		setList((prevState) => {
			const updatedList = [
				...prevState,
				{
					//check to see that at least one item exists before incrementing id
					// otherwise give first item an id of 1
					id: prevState[0] ? prevState[prevState.length - 1].id + 1 : 1,
					data: item,
					checked: false,
				},
			];

			setLocalStorage(LIST, updatedList);
			return updatedList;
		});
	};

	// console.log(lists);

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
