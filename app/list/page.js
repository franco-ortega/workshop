'use client';

import { useEffect, useState } from 'react';
import { CONSTANTS } from '../../utils/constants';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { createId } from '@/utils/createId';
import Loading from '@/components/Loading/Loading';
import CreateList from '@/components/CreateList/CreateList';
import ListWrapper from '@/components/ListWrapper/ListWrapper';
import Message from '@/components/Message/Message';
import NewList from '@/components/NewList/NewList';
import styles from './page.module.css';

export default function Home() {
	const { LIST, UNTITLED } = CONSTANTS;

	const [isLoading, setIsLoading] = useState(true);
	const [lists, setLists] = useState([]);

	const [isNewList, setIsNewList] = useState(false);
	const [isCreateListVisible, setIsCreateListVisible] = useState(false);

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
				<NewList setIsCreateListVisible={setIsCreateListVisible} />
			</header>
			<main>
				{isCreateListVisible && (
					<CreateList
						createList={createList}
						setIsCreateListVisible={setIsCreateListVisible}
					/>
				)}
				<>
					{isLoading ? (
						<Loading />
					) : lists.length > 0 ? (
						<ListWrapper
							lists={lists}
							setLists={setLists}
							addListItem={addListItem}
						/>
					) : (
						<Message message={'No list yet. Why not create one?'} />
					)}
				</>
			</main>
		</div>
	);
}
