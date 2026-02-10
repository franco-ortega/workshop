import { useState } from 'react';
import Button from '../Button/Button';
import styles from './NewList.module.css';
import CreateList from '../CreateList.jsx/CreateList';

export default function NewList({ createList }) {
	const [isNewList, setIsNewList] = useState(false);
	// const [isTitle, setIsTitle] = useState(false);
	// const [isChecked, setIsChecked] = useState(false);
	// const [listTitle, setListTitle] = useState('');

	// const toggleTitleOn = () => {
	// 	setIsTitle(true);
	// 	setIsChecked(true);
	// };

	// const toggleTitleOff = () => {
	// 	setIsTitle(false);
	// 	setIsChecked(true);
	// };

	// const onTitleChange = (e) => setListTitle(e.target.value);

	// const onCreateList = (e) => {
	// 	e.preventDefault();

	// 	createList(listTitle);
	// 	setListTitle('');
	// 	toggleTitleOff();
	// 	setIsChecked(false);
	// 	setIsNewList(false);
	// };

	// const onCancelNewList = () => {
	// 	setIsNewList(false);
	// 	setIsChecked(false);
	// 	setIsTitle(false);
	// };

	return (
		<div className={styles.NewList}>
			<Button
				text='New List'
				handler={() => {
					setIsNewList(true);
				}}
			/>

			{isNewList && (
				<CreateList createList={createList} setIsNewList={setIsNewList} />
			)}
		</div>
	);
}
