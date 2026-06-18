import styles from './FlexChild.module.css';

const FlexChild = ({ children }) => {
	return <li className={styles.flexChild}>{children}</li>;
};

export default FlexChild;
