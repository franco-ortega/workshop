'use client';

import Island from '@/components/Island/Island';
import styles from './page.module.css';

export default function Islands() {
	const testIsland = {
		border1: '10px',
		border2: '10px',
		border3: '10px',
		border4: '10px',
		width: '5rem',
		height: '5rem',
	};
	const island1 = {
		border1: '100px',
		border2: '50px',
		border3: '2em',
		border4: '1em',
		width: '10rem',
		height: '8rem',
	};
	const island2 = {
		border1: '25px',
		border2: '60px',
		border3: '40px',
		border4: '40px',
		width: '7rem',
		height: '9rem',
	};
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={styles.title}>Islands</h1>
				<div className={styles.lineWrapper}>
					<div className={`${styles.bookmark} ${styles.leftBookmark}`}></div>
					<div className={`${styles.bookmark} ${styles.rightBookmark}`}></div>
					<hr className={styles.line} />
				</div>
			</header>
			<main>
				<div>
					<Island {...testIsland} />
					<Island {...island1} />
					<Island {...island2} />
				</div>
			</main>
		</div>
	);
}
