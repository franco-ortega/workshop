import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.intro}>
					<h1>Hello, App</h1>
					<p>Hmmm...</p>
				</div>
			</main>
		</div>
	);
}
