import { useState } from 'react';
import styles from './CreateList.module.css';

function CreateList({ createNewList }) {
	const [isTitle, setIsTitle] = useState(false);

	const toggleTitleOn = () => setIsTitle(true);
	const toggleTitleOff = () => setIsTitle(false);

	const onCreateList = (e) => {
		e.preventDefault();

		// const sampleList = [
		// 	{
		// 		title: 'List',
		// 		listId: 111,
		// 		items: [
		// 			{ itemId: 1, data: 'eggs', checked: false },
		// 			{ itemId: 2, data: 'juice', checked: false },
		// 			{ itemId: 3, data: 'cookies', checked: false },
		// 			{ itemId: 4, data: 'salsa', checked: false },
		// 			{ itemId: 5, data: 'salad', checked: false },
		// 		],
		// 	},
		// ];

		createNewList();
	};

	return (
		<div className={styles.CreateList}>
			<p>Would you like your list to have a title?</p>
			<form action='' onSubmit={onCreateList}>
				<label htmlFor='yes'>
					<input
						type='radio'
						id='yes'
						name='title'
						value={true}
						onChange={toggleTitleOn}
					/>
					Yes
				</label>
				<label htmlFor='no'>
					<input
						type='radio'
						id='no'
						name='title'
						value={false}
						onChange={toggleTitleOff}
					/>
					No
				</label>
				<button>Create List</button>

				{isTitle && <input placeholder='list title' />}
			</form>
		</div>
	);
}
export default CreateList;
