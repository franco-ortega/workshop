import styles from './FlexChild.module.css';

const FlexChild = ({ children }) => {
	return <li className={styles.FlexChild}>{children}</li>;
};

export default FlexChild;
