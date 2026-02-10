import { useState } from 'react';
import Button from '../Button/Button';
// import CreateList from '../CreateList.jsx/CreateList';
import styles from './NewList.module.css';

export default function NewList({ setIsNewList }) {
	// const [isNewList, setIsNewList] = useState(false);

	return (
		<div className={styles.NewList}>
			<Button
				text='New List'
				handler={() => {
					setIsNewList(true);
				}}
			/>

			{/* {isNewList && (
				<CreateList createList={createList} setIsNewList={setIsNewList} />
			)} */}
		</div>
	);
}
