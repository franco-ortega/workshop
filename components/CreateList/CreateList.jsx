import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './CreateList.module.css';
import { lightValue } from '@/utils/lightValue';

function CreateList({ createList, closeCreateList }) {
	const [isChecked, setIsChecked] = useState(false);
	const [isTitle, setIsTitle] = useState(false);
	const [listTitle, setListTitle] = useState('');
	const [listColor, setListColor] = useState('');
	const [selectedColor, setSelectedColor] = useState('');

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

	const onSelectColor = (e) => {
		setListColor(e.target.value);
		setSelectedColor(e.target.children[e.target.selectedIndex].text);
	};

	const getDisplayedColor = (color, children) => {
		const childArray = React.Children.toArray(children);
		const selectedChild = childArray.find(
			(child) => child.props.value === color,
		);
		return selectedChild ? selectedChild.props.children : 'None';
	};

	const colorOptions = [
		<option key='default' value=''>
			Select a color
		</option>,
		<option key='none' value=''>
			None
		</option>,
		<option key='red' value='hsl(0, 50%, 50%, 0.85)'>
			Red
		</option>,
		<option key='orange' value='hsl(40, 79%, 46%, 0.85)'>
			Orange
		</option>,
		<option key='yellow' value='hsl(60, 80%, 55%, 0.85)'>
			Yellow
		</option>,
		<option key='green' value='hsl(120, 20%, 40%, 0.85)'>
			Green
		</option>,
		<option key='blue' value='hsl(240, 50%, 60%, 0.85)'>
			Blue
		</option>,
		<option key='black' value='hsl(0, 0%, 0%, 0.85)'>
			Black
		</option>,
		<option key='gray' value='hsl(170, 10%, 60%, 0.85)'>
			Gray
		</option>,
		<option key='white' value='hsl(0, 100%, 100%, 0.85)'>
			White
		</option>,
	];

	const displayedColor = getDisplayedColor(listColor, colorOptions);

	const isLightBackground = lightValue(listColor) > 50;

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
			<div
				className={styles.customSelect}
				style={{ backgroundColor: listColor, color: 'white' }}
			>
				<select
					style={{
						color: isLightBackground ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)',
					}}
					name=''
					id=''
					onChange={(e) => setListColor(e.target.value)}
				>
					<option value=''>Default</option>
					<option value='hsl(0, 50%, 50%, 0.85)'>Red</option>
					<option value='hsl(40, 79%, 46%, 0.85)'>Orange</option>
					<option value='hsl(60, 80%, 55%, 0.85)'>Yellow</option>
					<option value='hsl(120, 20%, 40%, 0.85)'>Green</option>
					<option value='hsl(240, 50%, 60%, 0.85)'>Blue</option>
					<option value='hsl(0, 0%, 0%, 0.85)'>Black</option>
					<option value='hsl(170, 10%, 60%, 0.85)'>Gray</option>
					<option value='hsl(0, 100%, 100%, 0.85)'>White</option>
				</select>
			</div>
			<br />
			<div
				className={styles.selectWrapper}
				// style={{
				// 	backgroundColor: listColor,
				// 	color: isLightBackground ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)',
				// }}
			>
				<select
					className={styles.selectHidden}
					style={{
						color: isLightBackground ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)',
					}}
					name=''
					id=''
					onChange={onSelectColor}
				>
					{/* <option value=''>Select a color</option>
					<option value=''>None</option>
					<option value='hsl(0, 50%, 50%, 0.85)'>Red</option>
					<option value='hsl(40, 79%, 46%, 0.85)'>Orange</option>
					<option value='hsl(60, 80%, 55%, 0.85)'>Yellow</option>
					<option value='hsl(120, 20%, 40%, 0.85)'>Green</option>
					<option value='hsl(240, 50%, 60%, 0.85)'>Blue</option>
					<option value='hsl(0, 0%, 0%, 0.85)'>Black</option>
					<option value='hsl(170, 10%, 60%, 0.85)'>Gray</option>
					<option value='hsl(0, 100%, 100%, 0.85)'>White</option> */}
					{colorOptions}
				</select>

				<div
					className={styles.selectPresentational}
					style={{
						backgroundColor: listColor,
						color: isLightBackground ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)',
					}}
				>
					{displayedColor}
					<span className={styles.selectCaret}>^</span>
				</div>
			</div>
			<div className={styles.buttonWrapper}>
				<button>Create List</button>
				<button onClick={onCancelNewList}>Cancel</button>
			</div>
		</form>
	);
}
export default CreateList;
