export default function Form({ buttonText }) {
	const submitListItem = (e) => {
		e.preventDefault();
		console.log('submit');
	};

	return (
		<form onSubmit={submitListItem}>
			<Label>
				<Input />
			</Label>
			<Button text={buttonText} />
		</form>
	);
}

// helper functions
function Input() {
	return <input type='text' />;
}

function Button({ text }) {
	return <button>{text}</button>;
}

function Label({ children }) {
	return <label>{children}</label>;
}
