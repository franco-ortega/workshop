import { useState } from 'react';
import Button from '../Button/Button';
import styles from './CreateList.module.css';

function CreateList({ createList, closeCreateList }) {
	const [isChecked, setIsChecked] = useState(false);
	const [isTitle, setIsTitle] = useState(false);
	const [listTitle, setListTitle] = useState('');
	const [listColor, setListColor] = useState('');

	const toggleTitle = (e) => {
		const yesOrNo = e.target.id;

		if (yesOrNo === 'yes') setIsTitle(true);
		else setIsTitle(false);

		setIsChecked(true);
	};

	const onTitleChange = (e) => setListTitle(e.target.value);

	const resetCreateList = () => {
		setListTitle('');
		setIsTitle(false);
		setIsChecked(false);
	};

	const onCreateList = (e) => {
		e.preventDefault();

		createList(listTitle, listColor);
		resetCreateList();
		closeCreateList();
	};

	const onCancelNewList = () => {
		resetCreateList();
		closeCreateList();
	};

	console.log(listColor);

	return (
		<form className={styles.CreateList} action='' onSubmit={onCreateList}>
			<p>Would you like your list to have a title?</p>
			<div className={styles.radioWrapper}>
				<label htmlFor='yes'>
					<input
						type='radio'
						id='yes'
						name='title'
						value={true}
						checked={isTitle && isChecked}
						onChange={toggleTitle}
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
						onChange={toggleTitle}
					/>
					No
				</label>

				{isTitle && (
					<label htmlFor='list-title'>
						<input
							type='text'
							id={'list-title'}
							placeholder='List Title'
							onChange={onTitleChange}
						/>
					</label>
				)}
			</div>
			<select name='' id='' onChange={(e) => setListColor(e.target.value)}>
				<option value=''>Default</option>
				<option value='hsl(0, 50%, 50%)'>Red</option>
				<option value='hsl(40, 79%, 46%)'>Orange</option>
				<option value='hsl(60, 80%, 55%)'>Yellow</option>
				<option value='hsl(120, 20%, 40%)'>Green</option>
				<option value='hsl(240, 50%, 60%)'>Blue</option>
				<option value='hsl(0, 0%, 0%)'>Black</option>
				<option value='hsl(170, 10%, 60%)'>Gray</option>
				<option value='hsl(0, 100%, 100%)'>White</option>
			</select>
			<div className={styles.buttonWrapper}>
				<button>Create List</button>
				<button onClick={onCancelNewList}>Cancel</button>
			</div>
		</form>
	);
}
export default CreateList;
