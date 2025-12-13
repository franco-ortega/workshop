import { useState } from 'react';
import styles from './ListForm.module.css';

export default function ListForm({ formHandler }) {
	const [item, setItem] = useState('');

	const onListItemSubmit = (e) => {
		e.preventDefault();
		formHandler(item);
		setItem('');
	};

	return (
		<div className={styles.ListForm}>
			<form onSubmit={onListItemSubmit}>
				<label htmlFor='list-item'>
					<input
						type='text'
						id='list-item'
						value={item}
						onChange={(e) => setItem(e.target.value)}
					/>
				</label>

				<button>Add Item</button>
			</form>
		</div>
	);
}
