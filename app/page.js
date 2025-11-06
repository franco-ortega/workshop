import List from './components/List/List';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.intro}>
					<h1>Hello, world.</h1>
					<p>
						<List />
					</p>
				</div>
			</main>
		</div>
	);
}
