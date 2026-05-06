import { useState } from 'react';
import styles from './CreateTitle.module.css';

function CreateTitle({ setListTitle }) {
	const [isChecked, setIsChecked] = useState(false);
	const [isTitle, setIsTitle] = useState(false);

	const onTitleChange = (e) => setListTitle(e.target.value);

	const toggleTitle = (e) => {
		const yesOrNo = e.target.id;

		if (yesOrNo === 'yes') setIsTitle(true);
		else setIsTitle(false);

		setIsChecked(true);
	};

	return (
		<section className={styles.CreateTitle}>
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
	);
}

export default CreateTitle;
