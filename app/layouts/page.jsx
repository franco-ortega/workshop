'use client';

import { useState } from 'react';
import FlexContainer from '@/components/Flex/FlexContainer';
import FlexRow from '@/components/Flex/FlexRow';
import FlexRowReverse from '@/components/Flex/FlexRowReverse';
import FlexChild from '@/components/Flex/FlexChild';
import styles from './page.module.css';
import Button from '@/components/Button/Button';

const flexRowData = [
	{ id: 1, item: 'cat' },
	{ id: 2, item: 'hamster' },
	{ id: 3, item: 'rabbit' },
	{ id: 4, item: 'bird' },
	{ id: 5, item: 'weasel' },
];

export default function Layouts() {
	const [flexRowDirection, setFlexRowDirection] = useState('FlexRow');

	const onFlexRowDirectionChange = (event) => {
		setFlexRowDirection((prev) => {
			if (prev === 'FlexRow') {
				return 'FlexRowReverse';
			} else {
				return 'FlexRow';
			}
		});
	};

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>Layouts</h1>
			</header>

			<main className={styles.main}>
				<h2>Flex</h2>
				<section className={styles.flexSection}>
					<h3>Flex Row</h3>
					<Button
						handler={onFlexRowDirectionChange}
						text={'Toggle Flex Row Direction'}
					/>

					{flexRowDirection === 'FlexRow' ? (
						<>
							<h4>Flex row:</h4>
							<FlexRow flexItems={flexRowData} />
						</>
					) : (
						<>
							<h4>Flex row reverse:</h4>
							<FlexRowReverse flexItems={flexRowData} />
						</>
					)}

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
				<p>&copy; 2026 My Website. All rights reserved.</p>
			</footer>
		</div>
	);
}
