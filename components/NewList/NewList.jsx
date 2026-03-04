import Button from '../Button/Button';
import styles from './NewList.module.css';

export default function NewList({ displayCreateList }) {
	return (
		<div className={styles.NewList}>
			<Button text='New List' handler={displayCreateList} />
		</div>
	);
}
