import { useState } from 'react';
import styles from './CreateList.module.css';

function CreateList() {
	const [isTitle, setIsTitle] = useState(false);

	const toggleTitleOn = () => setIsTitle(true);
	const toggleTitleOff = () => setIsTitle(false);

	return (
		<div className={styles.CreateList}>
			<h2>No list yet. Why not create one?</h2>
			<p>Would you like your list to have a title?</p>

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

			{isTitle && <input placeholder='list title' />}
			<button>Create List</button>
		</div>
	);
}
export default CreateList;
