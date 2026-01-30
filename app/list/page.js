'use client';

import { useEffect, useState } from 'react';
import { CONSTANTS } from '../../utils/constants';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { createId } from '@/utils/createId';
import CreateList from '@/components/CreateList.jsx/CreateList';
import ListWrapper from '@/components/ListWrapper/ListWrapper';
import Loading from '@/components/Loading/Loading';
import styles from './page.module.css';
import Message from '@/components/Message/Message';

export default function Home() {
	const { LIST, UNTITLED } = CONSTANTS;

	const [isLoading, setIsLoading] = useState(true);
	const [lists, setLists] = useState([]);

	useEffect(() => {
		const storedList = getLocalStorage(LIST);

		if (storedList) setLists(storedList);

		setIsLoading(false);
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
		if (!item) {
			alert('Please add a list item to continue');
			return;
		}

		setLists((prev) => {
			const updatedList = prev.map((list) => {
				if (list.listId === listId) {
					return {
						...list,
						items: [
							...list.items,
							{
								itemId: createId({
									idName: `${list.title}_${item}`,
								}),
								data: item,
								checked: false,
							},
						],
					};
				}
				return list;
			});

			setLocalStorage(LIST, updatedList);

			return updatedList;
		});
	};

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1>Listee</h1>
				<CreateList createList={createList} />
			</header>
			<main>
				<div>
					{!isLoading && !lists.length && (
						<Message message={'No list yet. Why not create one?'} />
					)}
					{isLoading ? (
						<Loading />
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
