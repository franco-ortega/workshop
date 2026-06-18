import FlexChild from './FlexChild';
import styles from './FlexRow.module.css';

const FlexRow = ({ flexItems }) => {
	return (
		<ul className={styles.flexRow}>
			{flexItems.map((item) => (
				<FlexChild key={item.id}>{item.item}</FlexChild>
			))}
		</ul>
	);
};

export default FlexRow;
