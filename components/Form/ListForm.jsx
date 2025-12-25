import { useState } from 'react';
import styles from './ListForm.module.css';

export default function ListForm({ addListItem, listId }) {
	const [item, setItem] = useState('');

	const onListItemSubmit = (e) => {
		e.preventDefault();
		addListItem(listId, item);
		setItem('');
	};

	return (
		<div className={styles.ListForm}>
			<form onSubmit={onListItemSubmit}>
				<label htmlFor='list-item'>
					<input
						type={'text'}
						id={'list-item'}
						value={item}
						placeholder={'add item'}
						onChange={(e) => setItem(e.target.value)}
					/>
				</label>
				<button>+</button>
			</form>
		</div>
	);
}
