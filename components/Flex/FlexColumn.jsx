import FlexChild from './FlexChild';
import styles from './FlexColumn.module.css';

const FlexColumn = ({ children }) => {
	return <ul className={styles.FlexColumn}>{children}</ul>;
};

export default FlexColumn;
