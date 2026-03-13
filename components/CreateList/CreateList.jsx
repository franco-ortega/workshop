import { useState } from 'react';
import Button from '../Button/Button';
import styles from './CreateList.module.css';

function CreateList({ createList, closeCreateList }) {
	const [isChecked, setIsChecked] = useState(false);
	const [isTitle, setIsTitle] = useState(false);
	const [listTitle, setListTitle] = useState('');

	const toggleTitle = (e) => {
		const yesOrNo = e.target.id;

		if (yesOrNo === 'yes') setIsTitle(true);
		else setIsTitle(false);

		setIsChecked(true);
	};

	const onTitleChange = (e) => setListTitle(e.target.value);

	const reset = () => {
		setIsChecked(false);
		setIsTitle(false);
		closeCreateList();
	};

	const onCreateList = (e) => {
		e.preventDefault();

		createList(listTitle);
		setListTitle('');
		reset();
	};

	const onCancelNewList = () => reset();

	return (
		<form className={styles.CreateList} action='' onSubmit={onCreateList}>
			<p>Would you like your list to have a title?</p>
			<div
				className={`
        ${styles.radioWrapper} 
        ${isTitle && styles.widen}
        `}
			>
				{/* <div> */}
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
				{/* </div> */}
				{isTitle && (
					// <div>
					<label htmlFor='list-title'>
						<input
							type='text'
							id={'list-title'}
							placeholder='List Title'
							onChange={onTitleChange}
						/>
					</label>
					// </div>
				)}
			</div>

			<div className={styles.buttonWrapper}>
				<Button text={'Create List'} handler={() => {}} />
				<Button text={'Cancel'} handler={onCancelNewList} />
			</div>
		</form>
	);
}
export default CreateList;
