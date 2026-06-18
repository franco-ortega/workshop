// a component that creates a flex row with the given children
import FlexChild from './FlexChild';
import styles from './FlexRow.module.css';

const testData = ['cat', 'hamster', 'rabbit', 'bird'];

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
