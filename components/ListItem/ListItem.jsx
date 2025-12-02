import EditIcon from '../_Icons/EditIcon';
import TrashIcon from '../_Icons/TrashIcon';
import styles from './ListItem.module.css';

export default function ListItem({ item }) {
	return (
		<li className={styles.ListItem}>
			<input type='checkbox' id={item} name={item} />
			<label htmlFor={item}>{item}</label>
			<EditIcon />
			<TrashIcon />
		</li>
	);
}
