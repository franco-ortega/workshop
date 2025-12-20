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

	const onCheckItem = () => checkListItem(item.itemId);

	const onOpenEdit = () => setEdit(true);

	const onEditItem = (e) => setEditedItem(e.target.value);

	const onSaveItem = () => {
		editListItem(item.itemId, editedItem, item.checked);
		setEdit(false);
	};

	const onCancelEdit = () => setEdit(false);

	const onDeleteItem = () => deleteItemHandler(item.itemId);

	return (
		<li className={styles.ListItem} key={item.itemId}>
			{!edit ? (
				<>
					<input
						type='checkbox'
						id={item.itemId}
						name={item.data}
						onChange={onCheckItem}
						checked={item.checked}
					/>
					<label htmlFor={item.itemId}>{item.data}</label>
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
							id={item.itemId}
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
