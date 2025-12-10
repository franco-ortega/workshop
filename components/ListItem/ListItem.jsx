import Icon from '../_Icons/Icon';
import styles from './ListItem.module.css';

export default function ListItem({ item, deleteItemHandler }) {
	const onDeleteItem = () => deleteItemHandler(item.id);

	return (
		<li className={styles.ListItem}>
			<input type='checkbox' id={item.id} name={item.data} />
			<label htmlFor={item.data}>{item.data}</label>

			<button>
				<Icon iconAlt={'Edit'} iconPath={'/icons/edit-icon-feather.svg'} />
			</button>
			<button onClick={onDeleteItem}>
				<Icon iconAlt={'Trash'} iconPath={'/icons/trash-icon-feather.svg'} />
			</button>
		</li>
	);
}
