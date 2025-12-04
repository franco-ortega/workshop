import ListItem from '../ListItem/ListItem';
import styles from './List.module.css';

export default function List({ list, deleteItemHandler }) {
	return (
		<section className={styles.List}>
			<h2>Groceries</h2>
			<ul>
				{list.map((item) => (
					<ListItem
						key={item.id}
						item={item.data}
						deleteItemHandler={deleteItemHandler}
					/>
				))}
			</ul>
		</section>
	);
}
