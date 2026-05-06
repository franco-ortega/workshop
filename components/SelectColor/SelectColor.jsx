import { useState } from 'react';
import colorData from '../../data/listColors.json';
import { lightValue } from '@/utils/lightValue';
import adjustLightness from '@/utils/adjustLightness';
import styles from './SelectColor.module.css';

function SelectColor({ listColor, setListColor }) {
	const [displayedColor, setDisplayedColor] = useState('');
	const adjustLighten = 10;
	const adjustDarken = -10;

	const onSelectColor = (e) => {
		setDisplayedColor(e.target.children[e.target.selectedIndex].textContent);
		setListColor(e.target.value);
	};

	const colorOptions = colorData.map((color) => (
		<option key={color.id} value={color.value}>
			{color.label}
		</option>
	));

	const lightenColor = () =>
		setListColor(adjustLightness(listColor, adjustLighten));

	const darkenColor = () =>
		setListColor(adjustLightness(listColor, adjustDarken));

	const textColor = (color) => {
		return lightValue(color) > 50 ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)';
	};

	return (
		<section className={styles.SelectColor}>
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
	);
}

export default SelectColor;
