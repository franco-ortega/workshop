import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';

export default function List({ list, deleteItemHandler, editListItem }) {
	return (
		<section className={styles.List}>
			<h2>Groceries</h2>
			<ul>
				{list.map((item) => (
					<ListItem
						key={item ? item.id : 1}
						item={item || 'missing data'}
						deleteItemHandler={deleteItemHandler}
						editListItem={editListItem}
					/>
				))}
			</ul>
		</section>
	);
}
