import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<header>
				<h1>Welcome to the Workshop</h1>
			</header>
			<main className={styles.main}>
				<div className={styles.content}>
					<p>A workshop for testing apps.</p>
				</div>
			</main>
		</div>
	);
}
