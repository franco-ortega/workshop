import { useState } from 'react';
import ListButton from '../NavLink/ListButton';
import styles from './CreateList.module.css';

function CreateList({ createList, setIsNewList }) {
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
		setIsNewList(false);
	};

	const onCancelNewList = () => {
		setIsNewList(false);
		setIsChecked(false);
		setIsTitle(false);
	};

	return (
		<div className={styles.CreateList}>
			<form action='' onSubmit={onCreateList}>
				<p>Would you like your list to have a title?</p>
				<div className={styles.radioWrapper}>
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

				<div className={styles.buttonWrapper}>
					<ListButton text={'Create List'} handler={() => {}} />
					<ListButton text={'Cancel'} handler={onCancelNewList} />
				</div>
			</form>
			{/* </>
			)} */}
		</div>
	);
}
export default CreateList;
