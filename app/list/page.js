'use client';

import { CONSTANTS } from '../../utils/constants';
import List from '@/components/List/List';
import Form from '@/components/Form/Form';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

export default function Home() {
	const LIST = CONSTANTS.LIST;

	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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
					id: prevState[0]
						? prevState[prevState.length - 1].id + 1
						: // otherwise give first item an id of 1
						  1,
					data: item,
				},
			];

			setLocalStorage(LIST, updatedList);
			return updatedList;
		});
	};

	const deleteListItem = (id) => {
		setList((prev) => {
			const updatedList = prev.filter((element) => element.id !== id);
			setLocalStorage(LIST, updatedList);
			return updatedList;
		});
	};

	const editListItem = (id, editedItem) => {
		// open input to edit item
		// display current item in input
		// save edited item
		// or cancel edit

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

	return (
		<div className={styles.page}>
			<main>
				<h1>List App</h1>
				<div className={styles.formWrapper}>
					<Form handler={addListItem} buttonText={'Add Item'} />
				</div>
				<div>
					{isLoading ? (
						'Retrieving list...'
					) : list.length ? (
						<List
							list={list}
							deleteItemHandler={deleteListItem}
							editListItem={editListItem}
						/>
					) : (
						'No list yet. Why not create one?'
					)}
				</div>
			</main>
		</div>
	);
}

const sampleData = [
	{ id: 1, data: 'eggs' },
	{ id: 2, data: 'juice' },
	{ id: 3, data: 'cookies' },
	{ id: 4, data: 'salsa' },
	{ id: 5, data: 'salad' },
];
