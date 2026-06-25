import FlexChild from './FlexChild';
import styles from './FlexRow.module.css';

const FlexRow = ({
	// flexItems
	children,
}) => {
	return (
		<ul className={styles.FlexRow}>
			{children}
			{/* {flexItems.map((item) => (
				<FlexChild key={item.id}>{item.item}</FlexChild>
			))} */}
		</ul>
	);
};

export default FlexRow;
