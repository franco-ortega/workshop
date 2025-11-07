import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<h1>Welcome to the Workshop</h1>
			<main>
				<div>
					<p>A workshop for testing apps.</p>
				</div>
			</main>
		</div>
	);
}
