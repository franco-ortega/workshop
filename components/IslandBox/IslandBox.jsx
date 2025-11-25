import styles from './IslandBox.module.css';

export default function IslandBox({ inset, children }) {
	return (
		<div className={styles.IslandBox} style={{ inset }}>
			{children}
		</div>
	);
}
