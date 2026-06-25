import FlexChild from './FlexChild';
import styles from './FlexContainer.module.css';

const FlexContainer = ({ children, direction }) => {
	return (
		<ul className={`${styles.FlexContainer} ${styles[direction]}`}>
			{children}
		</ul>
	);
};

export default FlexContainer;
