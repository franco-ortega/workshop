import Button from '../Button/Button';

import styles from './NewList.module.css';

export default function NewList({ setIsCreateListVisible }) {
	return (
		<div className={styles.NewList}>
			<Button
				text='New List'
				handler={() => {
					setIsCreateListVisible(true);
				}}
			/>
		</div>
	);
}
