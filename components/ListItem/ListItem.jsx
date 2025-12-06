import EditIcon from '../_Icons/EditIcon';
import TrashIcon from '../_Icons/TrashIcon';
import Icon from '../_Icons/Icon';
import styles from './ListItem.module.css';

export default function ListItem({ item, deleteItemHandler }) {
	const tempDeleteItem = () => deleteItemHandler(item.id);

	return (
		<li className={styles.ListItem}>
			<input type='checkbox' id={item.id} name={item.data} />
			<label htmlFor={item.data}>{item.data}</label>

			<button>
				<Icon iconAlt={'Edit'} iconPath={'/icons/edit-icon-feather.svg'} />
			</button>
			<button onClick={tempDeleteItem}>
				<Icon iconAlt={'Trash'} iconPath={'/icons/trash-icon-feather.svg'} />
			</button>
		</li>
	);
}
