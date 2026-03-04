import Button from '../Button/Button';
import styles from './NewList.module.css';

export default function NewList({ openCreateList }) {
	return (
		<div className={styles.NewList}>
			<Button text='New List' handler={openCreateList} />
		</div>
	);
}
