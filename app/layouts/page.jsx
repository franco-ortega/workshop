import FlexContainer from '@/components/Flex/FlexContainer';
import FlexRow from '@/components/Flex/FlexRow';
import FlexRowReverse from '@/components/Flex/FlexRowReverse';
import FlexChild from '@/components/Flex/FlexChild';
import styles from './page.module.css';

const flexRowData = [
	{ id: 1, item: 'cat' },
	{ id: 2, item: 'hamster' },
	{ id: 3, item: 'rabbit' },
	{ id: 4, item: 'bird' },
	{ id: 5, item: 'weasel' },
];

export default function Layouts() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>Layouts</h1>
			</header>

			<main className={styles.main}>
				<section className={styles.flexSection}>
					<h2>Flex</h2>

					<h3>Flex container: Flex Row</h3>
					<FlexContainer direction='FlexRow'>
						{flexRowData.map((item) => (
							<FlexChild key={item.id}>{item.item}</FlexChild>
						))}
					</FlexContainer>

					<hr />

					<h3>Flex container: Flex Row Reverse</h3>
					<FlexContainer direction='FlexRowReverse'>
						{flexRowData.map((item) => (
							<FlexChild key={item.id}>{item.item}</FlexChild>
						))}
					</FlexContainer>

					<hr />

					<h3>Flex container: Flex Column</h3>
					<FlexContainer direction='FlexColumn'>
						<h4>Column</h4>
						{flexRowData.map((item) => (
							<FlexChild key={item.id}>{item.item}</FlexChild>
						))}
					</FlexContainer>

					<hr />

					<h3>Flex container: Flex Column Reverse</h3>
					<FlexContainer direction='FlexColumnReverse'>
						{flexRowData.map((item) => (
							<FlexChild key={item.id}>{item.item}</FlexChild>
						))}
					</FlexContainer>

					<hr />

					<h3>Flex row:</h3>
					<FlexRow flexItems={flexRowData} />

					<hr />

					<h3>Flex row reverse:</h3>
					<FlexRowReverse flexItems={flexRowData} />

					<hr />

					<h3>Flex row wrap:</h3>
					<div className={`${styles.flexParent} ${styles.flexParentRowWrap}`}>
						<div className={styles.flexChild}>Flex Child 1</div>
						<div className={styles.flexChild}>Flex Child 2</div>
						<div className={styles.flexChild}>
							Flex Child 3 Flex Child 3 Flex Child 3 Flex Child 3
						</div>
						<div className={styles.flexChild}>Flex Child 4</div>
						<div className={styles.flexChild}>Flex Child 5</div>
						<div className={styles.flexChild}>
							Flex Child 6 Flex Child 6 Flex Child 6
						</div>
						<div className={styles.flexChild}>Flex Child 7</div>
						<div className={styles.flexChild}>Flex Child 8</div>
					</div>

					<hr />

					<h3>Flex column and Flex column reverse:</h3>
					<div className={styles.flexColumnWrapper}>
						<div className={`${styles.flexParent} ${styles.flexParentColumn}`}>
							<div className={styles.flexChild}>Flex Child 1</div>
							<div className={styles.flexChild}>Flex Child 2</div>
							<div className={styles.flexChild}>Flex Child 3</div>
							<div className={styles.flexChild}>Flex Child 4</div>
						</div>
						<div
							className={`${styles.flexParent} ${styles.flexParentColumnReverse}`}
						>
							<div className={styles.flexChild}>Flex Child 1</div>
							<div className={styles.flexChild}>Flex Child 2</div>
							<div className={styles.flexChild}>Flex Child 3</div>
							<div className={styles.flexChild}>Flex Child 4</div>
						</div>
					</div>

					<hr />

					<h3>Flex children:</h3>
					<div className={`${styles.flexParent} ${styles.flexParentChildren}`}>
						<div className={styles.flexChild}>Flex Child 1</div>
						<div className={styles.flexChild}>
							Flex Child 2 Flex Child 2 Flex Child 2
						</div>
						<div className={styles.flexChild}>Flex Child 3</div>
					</div>

					<hr />

					<h3>Flex children Fancy:</h3>
					<div
						className={`${styles.flexParent} ${styles.flexParentChildrenFancy}`}
					>
						<div className={styles.flexChild}>Flex Child 1</div>
						<div className={styles.flexChild}>
							Flex Child 2 Flex Child 2 Flex Child 2
						</div>
						<div className={styles.flexChild}>Flex Child 3</div>
					</div>

					<hr />
				</section>
			</main>

			<footer className={styles.footer}>
				<p>&copy; 2023 My Website. All rights reserved.</p>
			</footer>
		</div>
	);
}
