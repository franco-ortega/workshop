import { CONSTANTS } from '@/utils/constants';
import { setLocalStorage } from '@/utils/localStorage';
import ListItem from '../ListItem/ListItem';
import ListForm from '../Form/ListForm';
import styles from './List.module.css';

export default function List({ list, addListItem, setLists, listIndex }) {
	const LIST = CONSTANTS.LIST;

	const deleteItem = (itemId) => {
		setLists((prev) => {
			prev[listIndex].items = prev[listIndex].items.filter(
				(item) => item.itemId !== itemId
			);

			setLocalStorage(LIST, prev);

			return [...prev];
		});
	};

	const editItem = (id, editedItem, checked) => {
		setLists((prev) => {
			const updatedLists = prev[listIndex].items.map((element) => {
				if (element.itemId === id) {
					console.log({ element });
					return { itemId: id, data: editedItem, checked };
				} else return element;
			});

			prev[listIndex].items = updatedLists;

			setLocalStorage(LIST, prev);

			return [...prev];
		});
	};

	const checkListItem = (id) => {
		setList((prev) => {
			const updatedList = prev.map((item) => {
				if (item.itemId === id) {
					return { ...item, checked: !item.checked };
				} else return item;
			});

			setLocalStorage(LIST, updatedList);
			return updatedList;
		});
	};

	return (
		<>
			{list && (
				<section className={styles.List}>
					<h2>
						<span>{list.title}</span>
					</h2>
					<div>
						<ListForm addListItem={addListItem} />
					</div>
					<ul>
						{list.items.map((item) => (
							<ListItem
								key={item ? item.itemId : 1}
								item={item || 'missing data'}
								deleteItemHandler={deleteItem}
								editListItem={editItem}
								checkListItem={checkListItem}
							/>
						))}
					</ul>
				</section>
			)}
		</>
	);
}

// const deleteItem = (itemId) => {
// 	setLists((prev) => {
// 		const updatedLists = prev.map((list) => {
// 			if (list.listId === listId) {
// 				list.items = list.items.filter((item) => item.itemId !== itemId);
// 				return list;
// 			}
// 			return list;
// 		});

// 		setLocalStorage(LIST, updatedLists);

// 		return updatedLists;
// 	});
// };

// const editListItem = (id, editedItem) => {
// 	setList((prev) => {
// 		const updatedList = prev.map((element) => {
// 			if (element.id === id) {
// 				return { id, data: editedItem };
// 			} else return element;
// 		});

// 		setLocalStorage(LIST, updatedList);
// 		return updatedList;
// 	});
// };
