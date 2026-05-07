import { useState } from 'react';
import CreateTitle from '../CreateTitle/CreateTitle';
import SelectColor from '../SelectColor/SelectColor';
import styles from './CreateList.module.css';

function CreateList({ createList, closeCreateList }) {
	const [listTitle, setListTitle] = useState('');
	const [listColor, setListColor] = useState('');

	const resetCreateList = () => {
		// setListTitle('');
		// setIsTitle(false);
		// setIsChecked(false);
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

	return (
		<form className={styles.CreateList} action='' onSubmit={onCreateList}>
			<CreateTitle setListTitle={setListTitle} />

			<SelectColor listColor={listColor} setListColor={setListColor} />

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
