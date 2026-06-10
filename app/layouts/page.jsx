// create a page that uses display flex to create a layout with a header, main content area, and footer. The header should contain a title and a navigation menu. The main content area should have two sections: one for text and one for images. The footer should contain some copyright information.

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

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

					<p>Flex row:</p>
					<div className={`${styles.flexParent} ${styles.flexParentRow}`}>
						<div className={styles.flexChild}>Flex Child 1</div>
						<div className={styles.flexChild}>Flex Child 2</div>
						<div className={styles.flexChild}>Flex Child 3</div>
						<div className={styles.flexChild}>Flex Child 4</div>
					</div>

					<p>Flex row reverse:</p>
					<div
						className={`${styles.flexParent} ${styles.flexParentRowReverse}`}
					>
						<div className={styles.flexChild}>Flex Child 1</div>
						<div className={styles.flexChild}>Flex Child 2</div>
						<div className={styles.flexChild}>Flex Child 3</div>
						<div className={styles.flexChild}>Flex Child 4</div>
					</div>

					<p>Flex column and Flex column reverse:</p>
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
				</section>
			</main>

			<footer className={styles.footer}>
				<p>&copy; 2023 My Website. All rights reserved.</p>
			</footer>
		</div>
	);
}
