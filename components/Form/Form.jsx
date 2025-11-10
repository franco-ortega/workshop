import { useState } from 'react';

export default function Form({ handler, buttonText }) {
	const [item, setItem] = useState('');

	const onItemChange = (item) => {
		setItem(item);
	};

	const submitListItem = (e) => {
		e.preventDefault();

		handler(item);
	};

	return (
		<form onSubmit={submitListItem}>
			<label htmlFor='list-item'>
				<input
					type='text'
					id='list-item'
					value={item}
					onChange={(e) => onItemChange(e.target.value)}
				/>
			</label>

			<button>{buttonText}</button>
		</form>
	);
}
