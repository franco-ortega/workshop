'use client';

import { useEffect, useState } from 'react';
import { CONSTANTS } from '../../utils/constants';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import ListForm from '@/components/Form/ListForm';
import List from '@/components/List/List';
import styles from './page.module.css';

export default function Home() {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const LIST = CONSTANTS.LIST;

	function SampleData() {
		return (
			<div className={styles.sampleData}>
				<button
					onClick={() => {
						setList(sampleData);
						setLocalStorage(LIST, sampleData);
					}}
				>
					Load Sample List
				</button>
			</div>
		);
	}

	useEffect(() => {
		const storedList = getLocalStorage(LIST);
		if (storedList) setList(storedList);
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

	return (
		<div className={styles.page}>
			{/* <SampleData /> */}
			<main>
				<h1>List App</h1>
				{/* form needs to add item to list - a handler that updates state and local storage */}
				<ListForm addListItem={addListItem} />
				<div>
					{isLoading ? (
						'Retrieving list...'
					) : list.length ? (
						<List list={list} setList={setList} />
					) : (
						'No list yet. Why not create one?'
					)}
				</div>
			</main>
		</div>
	);
}

const sampleData = [
	{ id: 1, data: 'eggs', checked: false },
	{ id: 2, data: 'juice', checked: false },
	{ id: 3, data: 'cookies', checked: false },
	{ id: 4, data: 'salsa', checked: false },
	{ id: 5, data: 'salad', checked: false },
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
