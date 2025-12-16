import { useState } from 'react';
import Icon from '../_Icons/Icon';
import styles from './ListItem.module.css';

export default function ListItem({
	item,
	deleteItemHandler,
	editListItem,
	checkListItem,
}) {
	const [edit, setEdit] = useState(false);
	const [editedItem, setEditedItem] = useState('');

	const onSaveItem = () => {
		console.log('save edit');
		editListItem(item.id, editedItem);
		setEdit(false);
	};

	const onCheckItem = () => {
		checkListItem(item.id);
	};

	return (
		<li className={styles.ListItem}>
			{!edit ? (
				<>
					<input
						type='checkbox'
						id={item.id}
						name={item.data}
						onChange={onCheckItem}
					/>
					<label htmlFor={item.data}>{item.data}</label>

					<button onClick={() => setEdit(true)}>
						<Icon iconAlt={'Edit'} iconPath={'/icons/edit-icon-feather.svg'} />
					</button>
					<button onClick={() => deleteItemHandler(item.id)}>
						<Icon
							iconAlt={'Trash'}
							iconPath={'/icons/trash-icon-feather.svg'}
						/>
					</button>
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
					<button onClick={onSaveItem}>
						<Icon iconAlt={'Save'} iconPath={'/icons/save-icon-feather.svg'} />
					</button>
					<button onClick={() => setEdit(false)}>
						<Icon
							iconAlt={'Cancel'}
							iconPath={'/icons/x-circle-icon-feather.svg'}
						/>
					</button>
				</>
			)}
		</li>
	);
}
