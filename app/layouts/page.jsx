// create a page that uses display flex to create a layout with a header, main content area, and footer. The header should contain a title and a navigation menu. The main content area should have two sections: one for text and one for images. The footer should contain some copyright information.

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import FlexRow from '@/components/Flex/FlexRow';
import FlexRowReverse from '@/components/Flex/FlexRowReverse';

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
				{/* <nav className={styles.nav}>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/about'>About</Link>
						</li>
						<li>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</nav> */}
			</header>

			<main className={styles.main}>
				<section className={styles.flexSection}>
					<h2>Flex</h2>

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
