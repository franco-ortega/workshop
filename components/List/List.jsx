import { CONSTANTS } from '@/utils/constants';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';
import { setLocalStorage } from '@/utils/localStorage';

export default function List({ list, setList }) {
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

	return (
		<section className={styles.List}>
			<h2>Groceries</h2>
			<ul>
				{list.map((item) => (
					<ListItem
						key={item ? item.id : 1}
						item={item || 'missing data'}
						deleteItemHandler={deleteListItem}
						editListItem={editListItem}
					/>
				))}
			</ul>
		</section>
	);
}
