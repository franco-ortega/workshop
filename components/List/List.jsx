import { CONSTANTS } from '@/utils/constants';
import { setLocalStorage } from '@/utils/localStorage';
import ListItem from '../ListItem/ListItem';
import ListForm from '../Form/ListForm';
import styles from './List.module.css';

export default function List({ list, addListItem, setLists, listIndex }) {
	const LIST = CONSTANTS.LIST;

	const deleteItem = (itemId) => {
		setLists((prev) => {
			const updatedItems = prev[listIndex].items.filter(
				(item) => item.itemId !== itemId
			);

			prev[listIndex].items = updatedItems;

			setLocalStorage(LIST, prev);

			return [...prev];
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

	const checkListItem = (id) => {
		// check or uncheck list item -> change status from false to true
		// check -> change status from false to true
		// uncheck -> change status from true to false
		// just needs to change the current state of the boolean
		setList((prev) => {
			const updatedList = prev.map((item) => {
				if (item.id === id) {
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
								editListItem={editListItem}
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
