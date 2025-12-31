'use client';

import { useEffect, useState } from 'react';
import { CONSTANTS } from '../../utils/constants';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { createId } from '@/utils/createId';
import CreateList from '@/components/CreateList.jsx/CreateList';
import ListWrapper from '@/components/ListWrapper/ListWrapper';
import Loading from '@/components/Loading/Loading';
import styles from './page.module.css';

export default function Home() {
	const { LIST, UNTITLED } = CONSTANTS;

	const [isLoading, setIsLoading] = useState(true);
	const [lists, setLists] = useState([]);

	useEffect(() => {
		const storedList = getLocalStorage(LIST);

		if (storedList) {
			setLists(storedList);
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
				{!isLoading && !lists.length && (
					<div>No list yet. Why not create one?</div>
				)}
				<div>
					{isLoading ? (
						<Loading message={'Retrieving list...'} />
					) : (
						lists && (
							<ListWrapper
								lists={lists}
								setLists={setLists}
								addListItem={addListItem}
							/>
						)
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
