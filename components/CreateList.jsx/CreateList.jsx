import { useState } from 'react';
import styles from './CreateList.module.css';

function CreateList({ createList }) {
	const [isTitle, setIsTitle] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [listTitle, setListTitle] = useState('');

	const toggleTitleOn = () => {
		setIsTitle(true);
		setIsChecked(true);
	};
	const toggleTitleOff = () => {
		setIsTitle(false);
		setIsChecked(true);
	};

	const onTitleChange = (e) => setListTitle(e.target.value);

	const onCreateList = (e) => {
		e.preventDefault();

		createList(listTitle);
		setListTitle('');
		toggleTitleOff();
		setIsChecked(false);
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
						checked={isTitle && isChecked}
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
						checked={!isTitle && isChecked}
						onChange={toggleTitleOff}
					/>
					No
				</label>
				<button>Create List</button>

				{isTitle && (
					<label htmlFor='list-title'>
						<input
							id={'list-title'}
							placeholder='list title'
							onChange={onTitleChange}
						/>
					</label>
				)}
			</form>
		</div>
	);
}
export default CreateList;

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
