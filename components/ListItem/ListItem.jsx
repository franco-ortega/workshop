import { useState } from 'react';
import Icon from '../_Icons/Icon';
import styles from './ListItem.module.css';
import IconButton from '../_Icons/IconButton';

export default function ListItem({
	item,
	deleteItemHandler,
	editListItem,
	checkListItem,
}) {
	const [edit, setEdit] = useState(false);
	const [editedItem, setEditedItem] = useState('');

	const onSaveItem = () => {
		editListItem(item.id, editedItem);
		setEdit(false);
	};

	return (
		<li className={styles.ListItem}>
			{!edit ? (
				<>
					<input
						type='checkbox'
						id={item.id}
						name={item.data}
						onChange={() => checkListItem(item.id)}
						checked={item.checked}
					/>
					<label htmlFor={item.data}>{item.data}</label>
					<div>
						<IconButton
							clickHandler={() => setEdit(true)}
							iconAlt={'Edit'}
							iconPath={'/icons/edit-icon-feather.svg'}
						/>
						<IconButton
							clickHandler={() => deleteItemHandler(item.id)}
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
							onChange={(e) => setEditedItem(e.target.value)}
						/>
					</label>
					<IconButton
						clickHandler={onSaveItem}
						iconAlt={'Save'}
						iconPath={'/icons/save-icon-feather.svg'}
					/>
					<IconButton
						clickHandler={() => setEdit(false)}
						iconAlt={'Cancel'}
						iconPath={'/icons/x-circle-icon-feather.svg'}
					/>
				</>
			)}
		</li>
	);
}
