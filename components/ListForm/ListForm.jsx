import { useRef } from 'react';
import styles from './ListForm.module.css';

export default function ListForm({ addListItem, listId }) {
	const inputRef = useRef(null);

	const onListItemSubmit = (e) => {
		e.preventDefault();
		addListItem(listId, e.target[0].value);

		if (inputRef.current) inputRef.current.value = '';
	};

	return (
		<div className={styles.ListForm}>
			<form onSubmit={onListItemSubmit}>
				<label htmlFor='list-item'>
					<input
						type={'text'}
						id={'list-item'}
						ref={inputRef}
						placeholder={'add item'}
					/>
				</label>
				<button>+</button>
			</form>
		</div>
	);
}
