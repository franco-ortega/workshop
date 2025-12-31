'use client';

import { useEffect, useState } from 'react';
import { CONSTANTS } from '../../utils/constants';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { createId } from '@/utils/createId';
import { updateData } from '@/utils/updateData';
import CreateList from '@/components/CreateList.jsx/CreateList';
import ListWrapper from '@/components/ListWrapper/ListWrapper';
import styles from './page.module.css';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [lists, setLists] = useState([]);
	const LIST = CONSTANTS.LIST;
	const UNTITLED = CONSTANTS.UNTITLED;

	useEffect(() => {
		const storedList = getLocalStorage(LIST);

		if (storedList) {
			if (storedList[0]?.title) {
				const updatedList = updateData(storedList);

				setLists(updatedList);
			} else {
				setLists((prev) => {
					const updatedData = [
						{
							title: 'Groceries',
							listId: 'groceries1',
							items: prev,
						},
					];

					setLocalStorage(LIST, updatedData);

					return updatedData;
				});
			}
			setIsLoading(false);
		}
	}, [LIST]);

	const createList = (title) => {
		const newTitle = title.length ? title : UNTITLED;

		setLists((prev) => {
			const newList = [
				...prev,
				{
					title: newTitle,
					listId: createId({
						idName: newTitle,
					}),
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
					itemId: createId({
						idName: `${listToUpdate.title}_${item}`,
					}),
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

	return (
		<div className={styles.page}>
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

//
//
//
//
//
//
//
//
//
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
