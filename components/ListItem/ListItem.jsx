import { useState } from 'react';
import Icon from '../_Icons/Icon';
import styles from './ListItem.module.css';

export default function ListItem({ item, deleteItemHandler }) {
	const [edit, setEdit] = useState(false);

	const onDeleteItem = () => deleteItemHandler(item.id);

	const onEditItem = () => {
		setEdit(true);
	};

	const onSaveItem = () => {
		console.log('save edit');
	};

	const onCancelEdit = () => {
		setEdit(false);
	};

	return !edit ? (
		<li className={styles.ListItem}>
			<input type='checkbox' id={item.id} name={item.data} />
			<label htmlFor={item.data}>{item.data}</label>

			<button onClick={onEditItem}>
				<Icon iconAlt={'Edit'} iconPath={'/icons/edit-icon-feather.svg'} />
			</button>
			<button onClick={onDeleteItem}>
				<Icon iconAlt={'Trash'} iconPath={'/icons/trash-icon-feather.svg'} />
			</button>
		</li>
	) : (
		<li className={styles.ListItem}>
			<label htmlFor={item.data}>
				<input
					defaultValue={item.data}
					id={item.id}
					name={item.data}
					size='10'
				/>
			</label>
			<button onClick={onSaveItem}>
				<Icon iconAlt={'Save'} iconPath={'/icons/save-icon-feather.svg'} />
			</button>
			<button onClick={onCancelEdit}>
				<Icon
					iconAlt={'Cancel'}
					iconPath={'/icons/x-circle-icon-feather.svg'}
				/>
			</button>
		</li>
	);
}
