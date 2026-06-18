// a component that creates a flex row with the given children
import styles from './FlexRow.module.css';

const FlexRow = ({ children }) => {
	return (
		<ul className={styles.flexRow}>
			{children}
			<li className={styles.flexChild}>Flex Child 1</li>
			<li className={styles.flexChild}>Flex Child 2</li>
			<li className={styles.flexChild}>Flex Child 3</li>
			<li className={styles.flexChild}>Flex Child 4</li>
		</ul>
	);
};

export default FlexRow;
