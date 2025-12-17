import { useState } from 'react';
import IconButton from '../_Icons/IconButton';
import styles from './ListItem.module.css';

export default function ListItem({
	item,
	deleteItemHandler,
	editListItem,
	checkListItem,
}) {
	const [edit, setEdit] = useState(false);
	const [editedItem, setEditedItem] = useState('');

	const onCheckItem = () => checkListItem(item.id);

	const onOpenEdit = () => setEdit(true);

	const onEditItem = (e) => setEditedItem(e.target.value);

	const onSaveItem = () => {
		editListItem(item.id, editedItem);
		setEdit(false);
	};

	const onCancelEdit = () => setEdit(false);

	const onDeleteItem = () => deleteItemHandler(item.id);

	return (
		<li className={styles.ListItem}>
			{!edit ? (
				<>
					<input
						type='checkbox'
						id={item.id}
						name={item.data}
						onChange={onCheckItem}
						checked={item.checked}
					/>
					<label htmlFor={item.id}>{item.data}</label>
					<div>
						<IconButton
							clickHandler={onOpenEdit}
							iconAlt={'Edit'}
							iconPath={'/icons/edit-icon-feather.svg'}
						/>
						<IconButton
							clickHandler={onDeleteItem}
							iconAlt={'Trash'}
							iconPath={'/icons/trash-icon-feather.svg'}
						/>
					</div>
				</>
			) : (
				<>
					<label htmlFor={item.data}>
						<input
							defaultValue={item.data}
							id={item.id}
							name={item.data}
							size='10'
							onChange={onEditItem}
						/>
					</label>
					<div>
						<IconButton
							clickHandler={onSaveItem}
							iconAlt={'Save'}
							iconPath={'/icons/save-icon-feather.svg'}
						/>
						<IconButton
							clickHandler={onCancelEdit}
							iconAlt={'Cancel'}
							iconPath={'/icons/x-circle-icon-feather.svg'}
						/>
					</div>
				</>
			)}
		</li>
	);
}
