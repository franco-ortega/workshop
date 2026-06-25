'use client';

import { useState } from 'react';
import Button from '@/components/Button/Button';
import FlexRow from '@/components/Flex/FlexRow';
import FlexRowReverse from '@/components/Flex/FlexRowReverse';
import FlexColumn from '@/components/Flex/FlexColumn';
import FlexColumnReverse from '@/components/Flex/FlexColumnReverse';
import FlexChild from '@/components/Flex/FlexChild';
import styles from './page.module.css';

const flexRowData = [
	{ id: 1, item: 'cat' },
	{ id: 2, item: 'hamster' },
	{ id: 3, item: 'rabbit' },
	{ id: 4, item: 'bird' },
	{ id: 5, item: 'weasel' },
];

const flexData = flexRowData.map((item) => (
	<FlexChild key={item.id}>{item.item}</FlexChild>
));

export default function Layouts() {
	const [flexRowDirection, setFlexRowDirection] = useState('FlexRow');
	const [flexColumnDirection, setFlexColumnDirection] = useState('FlexColumn');

	const onFlexRowDirectionChange = (event) => {
		setFlexRowDirection((prev) => {
			if (prev === 'FlexRow') {
				return 'FlexRowReverse';
			} else {
				return 'FlexRow';
			}
		});
	};

	const onFlexColumnDirectionChange = (event) => {
		setFlexColumnDirection((prev) => {
			if (prev === 'FlexColumn') {
				return 'FlexColumnReverse';
			} else {
				return 'FlexColumn';
			}
		});
	};

	const flexRowheader =
		flexRowDirection === 'FlexRow' ? 'Flex Row' : 'Flex Row  Reverse';

	const flexRowButton =
		flexRowDirection === 'FlexRow' ? 'Flex Row Reverse' : 'Flex Row';

	const flexColumnButton =
		flexColumnDirection === 'FlexColumn'
			? 'Flex Column Reverse'
			: 'Flex Column';

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>Layouts</h1>
			</header>

			<main className={styles.main}>
				<h2>Flex</h2>

				<div className={styles.wrapper}>
					<section className={styles.flexSection}>
						<h3>{flexRowheader}</h3>

						{flexRowDirection === 'FlexRow' ? (
							<FlexRow>{flexData}</FlexRow>
						) : (
							<FlexRowReverse>{flexData}</FlexRowReverse>
						)}

						<Button handler={onFlexRowDirectionChange} text={flexRowButton} />
					</section>

					<hr />

					<section className={styles.flexSection}>
						<div className={styles.subtitle}>
							<h3>Flex Column</h3>

							<Button
								handler={onFlexColumnDirectionChange}
								text={flexColumnButton}
							/>
						</div>

						{flexColumnDirection === 'FlexColumn' ? (
							<>
								<h4>Flex Column:</h4>
								<FlexColumn>{flexData}</FlexColumn>
							</>
						) : (
							<>
								<h4>Flex Column Reverse:</h4>
								<FlexColumnReverse>{flexData}</FlexColumnReverse>
							</>
						)}
					</section>
				</div>

				<hr />

				<section className={styles.flexSection}>
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
