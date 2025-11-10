import { useState } from 'react';

export default function Form({ handler, buttonText }) {
	const [item, setItem] = useState('');

	const onItemChange = (item) => {
		setItem(item);
	};
	console.log({ item });

	const submitListItem = (e) => {
		e.preventDefault();
		console.log('submit');
		console.log(item);

		handler(item);
	};

	return (
		<form onSubmit={submitListItem}>
			<Label>
				<Input onChangeHandler={onItemChange} />
			</Label>
			<Button text={buttonText} />
		</form>
	);
}

// helper functions
function Input({ onChangeHandler }) {
	return (
		<input type='text' onChange={(e) => onChangeHandler(e.target.value)} />
	);
}

function Button({ text }) {
	return <button>{text}</button>;
}

function Label({ children }) {
	return <label>{children}</label>;
}
