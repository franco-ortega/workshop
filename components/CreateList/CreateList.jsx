import { useState } from 'react';
import CreateTitle from '../CreateTitle/CreateTitle';
import SelectColor from '../SelectColor/SelectColor';
import styles from './CreateList.module.css';

function CreateList({ createList, closeCreateList }) {
	const [listTitle, setListTitle] = useState('');
	const [listColor, setListColor] = useState('');

	const onCreateList = (e) => {
		e.preventDefault();

		createList(listTitle, listColor);
		closeCreateList();
	};

	return (
		<form className={styles.CreateList} action='' onSubmit={onCreateList}>
			<CreateTitle setListTitle={setListTitle} />

			<SelectColor listColor={listColor} setListColor={setListColor} />

			<section className={styles.buttonWrapper}>
				<button>Create List</button>
				<button onClick={closeCreateList}>Cancel</button>
			</section>
		</form>
	);
}
export default CreateList;
