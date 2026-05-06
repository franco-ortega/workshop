import { useState } from 'react';
import colorData from '../../data/listColors.json';
import { lightValue } from '@/utils/lightValue';
import getDisplayedColor from '@/utils/getDisplayedColor';
import adjustLightness from '@/utils/adjustLightness';
import styles from './CreateList.module.css';

function CreateList({ createList, closeCreateList }) {
	const [isChecked, setIsChecked] = useState(false);
	const [isTitle, setIsTitle] = useState(false);
	const [listTitle, setListTitle] = useState('');
	const [listColor, setListColor] = useState('');
	const adjustLighten = 10;
	const adjustDarken = -10;

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

	const lightenColor = () =>
		setListColor(adjustLightness(listColor, adjustLighten));

	const darkenColor = () =>
		setListColor(adjustLightness(listColor, adjustDarken));

	const textColor = (color) => {
		return lightValue(color) > 50 ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)';
	};

	console.log({ isChecked, isTitle, listTitle, listColor, displayedColor });

	return (
		<form className={styles.CreateList} action='' onSubmit={onCreateList}>
			{/* SECTIONS:
      Section 1: Title
      Section 2: Color
      Section 3: Create/Cancel buttons
      */}

			<section className={styles.sectionRadio}>
				<p>Would you like your list to have a title?</p>
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
			</section>

			{/* <section>
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
			</section> */}

			<section className={styles.sectionSelect}>
				<label htmlFor='color-list'>Select a color:</label>

				<div className={styles.selectWrapper}>
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
							color: textColor(listColor),
						}}
					>
						{listColor ? displayedColor : 'None'}
						<span className={styles.selectCaret}>^</span>
					</div>
				</div>

				{listColor && (
					<div className={styles.selectButtonsWrapper}>
						<button
							type='button'
							onClick={lightenColor}
							style={{
								backgroundColor: adjustLightness(listColor, adjustLighten),
								color: textColor(adjustLightness(listColor, adjustLighten)),
							}}
						>
							Lighten
						</button>
						<button
							type='button'
							onClick={darkenColor}
							style={{
								backgroundColor: adjustLightness(listColor, adjustDarken),
								color:
									lightValue(adjustLightness(listColor, adjustDarken)) > 50
										? 'hsl(0, 0%, 0%)'
										: 'hsl(0, 0%, 100%)',
							}}
						>
							Darken
						</button>
					</div>
				)}
			</section>

			{/* <section>
				<label htmlFor='color-list'>Select a color:</label>
				<div className={styles.selectWrapper}>
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
							color: textColor(listColor),
						}}
					>
						{listColor ? displayedColor : 'None'}
						<span className={styles.selectCaret}>^</span>
					</div>

					{listColor && (
						<div className={styles.selectButtonsWrapper}>
							<button
								type='button'
								onClick={lightenColor}
								style={{
									backgroundColor: adjustLightness(listColor, adjustLighten),
									color: textColor(adjustLightness(listColor, adjustLighten)),
								}}
							>
								Lighten
							</button>
							<button
								type='button'
								onClick={darkenColor}
								style={{
									backgroundColor: adjustLightness(listColor, adjustDarken),
									color:
										lightValue(adjustLightness(listColor, adjustDarken)) > 50
											? 'hsl(0, 0%, 0%)'
											: 'hsl(0, 0%, 100%)',
								}}
							>
								Darken
							</button>
						</div>
					)}
				</div>
			</section> */}

			<section>
				<div className={styles.buttonWrapper}>
					<button>Create List</button>
					<button onClick={onCancelNewList}>Cancel</button>
				</div>
			</section>
		</form>
	);
}
export default CreateList;
