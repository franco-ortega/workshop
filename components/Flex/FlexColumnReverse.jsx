import FlexChild from './FlexChild';
import styles from './FlexColumnReverse.module.css';

const FlexColumnReverse = ({ children }) => {
	return <ul className={styles.FlexColumnReverse}>{children}</ul>;
};

export default FlexColumnReverse;
