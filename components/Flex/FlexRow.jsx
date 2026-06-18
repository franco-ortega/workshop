// a component that creates a flex row with the given children
import FlexChild from './FlexChild';
import styles from './FlexRow.module.css';

const testData = ['cat', 'hamster', 'rabbit', 'bird'];

const FlexRow = ({ children }) => {
	return (
		<ul className={styles.flexRow}>
			{/* update children to display testData using the FlexChild component */}
			{children}
			{testData.map((item, index) => (
				<FlexChild key={index}>{item}</FlexChild>
			))}
		</ul>
	);
};

export default FlexRow;
