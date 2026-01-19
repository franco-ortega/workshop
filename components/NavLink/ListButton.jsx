import styles from './ListButton.module.css';

export default function ListButton({ text, handler }) {
	return (
		<button className={styles.ListButton} onClick={handler}>
			{text}
		</button>
	);
}
