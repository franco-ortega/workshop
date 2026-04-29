import { useState } from 'react';
import colorData from '../../data/listColors.json';
import { lightValue } from '@/utils/lightValue';
import getDisplayedColor from '@/utils/getDisplayedColor';
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

	const onSelectColor = (e) => setListColor(e.target.value);

	const colorOptions = colorData.map((color) => (
		<option key={color.value} value={color.value}>
			{color.label}
		</option>
	));

	const displayedColor = getDisplayedColor(listColor, colorOptions);

	const isLightBackground = lightValue(listColor) > 50;

	const adjustLightness = (color, adjustment) => {
		const adjustedLightValue = lightValue(color) + adjustment;
		const before = color.slice(0, color.indexOf('%') + 3);
		const after = color.slice(color.lastIndexOf(','));

		// reconstruct the color string with the adjusted lightness value
		setListColor(`${before}${adjustedLightValue}%${after}`);
	};

	const lightenColor = () => adjustLightness(listColor, 5);

	const darkenColor = () => adjustLightness(listColor, -5);

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

			<div className={styles.selectWrapper}>
				<label htmlFor='color-list'>Select a color:</label>
				<select
					className={styles.selectHidden}
					name='color list'
					id='color-list'
					onChange={onSelectColor}
				>
					{colorOptions}
				</select>

				<div
					className={styles.selectPresentational}
					style={{
						backgroundColor: listColor,
						color: isLightBackground ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)',
					}}
				>
					{listColor ? displayedColor : 'None'}
					<span className={styles.selectCaret}>^</span>
				</div>

				{listColor && (
					<div className={styles.selectButtonsWrapper}>
						<button type='button' onClick={lightenColor}>
							Lighten
						</button>
						<button type='button' onClick={darkenColor}>
							Darken
						</button>
					</div>
				)}
			</div>
			<div className={styles.buttonWrapper}>
				<button>Create List</button>
				<button onClick={onCancelNewList}>Cancel</button>
			</div>
		</form>
	);
}
export default CreateList;
