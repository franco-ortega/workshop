import FlexChild from './FlexChild';
import styles from './FlexRowReverse.module.css';

const FlexRowReverse = ({
	// flexItems
	children,
}) => {
	return (
		<ul className={styles.FlexRowReverse}>
			{/* {flexItems.map((item) => (
				<FlexChild key={item.id}>{item.item}</FlexChild>
			))} */}
			{children}
		</ul>
	);
};

export default FlexRowReverse;
