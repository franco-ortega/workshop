import { CONSTANTS } from '@/utils/constants';
import { setLocalStorage } from '@/utils/localStorage';
import ListItem from '../ListItem/ListItem';
import ListForm from '../Form/ListForm';
import styles from './List.module.css';

export default function List({ list, setList, addListItem }) {
	const LIST = CONSTANTS.LIST;

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
		<section className={styles.List}>
			<h2>Groceries</h2>
			<div>
				<ListForm addListItem={addListItem} />
			</div>
			<ul>
				{list.map((item) => (
					<ListItem
						key={item ? item.id : 1}
						item={item || 'missing data'}
						deleteItemHandler={deleteListItem}
						editListItem={editListItem}
						checkListItem={checkListItem}
					/>
				))}
			</ul>
		</section>
	);
}
