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

const flexDirectionData = {
	flexRow: {
		default: { state: 'FlexRow', title: 'Flex Row' },
		reverse: { state: 'FlexRowReverse', title: 'Flex Row Reverse' },
	},
	flexColumn: {
		default: { state: 'FlexColumn', title: 'Flex Column' },
		reverse: { state: 'FlexColumnReverse', title: 'Flex Column Reverse' },
	},
};

const flexData = flexRowData.map((item) => (
	<FlexChild key={item.id}>{item.item}</FlexChild>
));

export default function Layouts() {
	const { flexRow, flexColumn } = flexDirectionData;

	const [flexRowDirection, setFlexRowDirection] = useState(
		flexRow.default.state,
	);
	const [flexColumnDirection, setFlexColumnDirection] = useState(
		flexColumn.default.state,
	);

	const onFlexRowDirectionChange = () => {
		setFlexRowDirection((prev) => {
			if (prev === flexRow.default.state) {
				return flexRow.reverse.state;
			} else {
				return flexRow.default.state;
			}
		});
	};

	const onFlexColumnDirectionChange = () => {
		setFlexColumnDirection((prev) => {
			if (prev === flexColumn.default.state) {
				return flexColumn.reverse.state;
			} else {
				return flexColumn.default.state;
			}
		});
	};

	const createHeaderText = (direction, data) =>
		direction === data.default.state ? data.default.title : data.reverse.title;

	const createButtonText = (direction, data) =>
		direction === data.default.state ? data.reverse.title : data.default.title;

	const flexRowheaderText = createHeaderText(flexRowDirection, flexRow);
	const flexRowButtonText = createButtonText(flexRowDirection, flexRow);
	const flexColumnheaderText = createHeaderText(
		flexColumnDirection,
		flexColumn,
	);
	const flexColumnButtonText = createButtonText(
		flexColumnDirection,
		flexColumn,
	);

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>Layouts</h1>
			</header>

			<main className={styles.main}>
				<h2>Flex</h2>

				<div className={styles.wrapper}>
					<section className={styles.flexSection}>
						<h3>{flexRowheaderText}</h3>

						{flexRowDirection === 'FlexRow' ? (
							<FlexRow>{flexData}</FlexRow>
						) : (
							<FlexRowReverse>{flexData}</FlexRowReverse>
						)}

						<Button
							handler={onFlexRowDirectionChange}
							text={flexRowButtonText}
						/>
					</section>

					<hr />

					<section className={styles.flexSection}>
						<h3>{flexColumnheaderText}</h3>

						{flexColumnDirection === 'FlexColumn' ? (
							<FlexColumn>{flexData}</FlexColumn>
						) : (
							<FlexColumnReverse>{flexData}</FlexColumnReverse>
						)}
						<Button
							handler={onFlexColumnDirectionChange}
							text={flexColumnButtonText}
						/>
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
