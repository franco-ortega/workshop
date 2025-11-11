import Item from '../Item/Item';
import styles from './ListItem.module.css';

export default function ListItem({ item }) {
	return (
		<li className={styles.ListItem}>
			<input type='checkbox' />
			<Item item={item} />
		</li>
	);
}
