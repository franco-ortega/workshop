import List from './components/List/List';
import styles from './page.module.css';

export default function Home() {
	const sampleData = ['eggs', 'juice', 'cookies', 'salsa', 'salad'];

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.intro}>
					<h1>Hello, list.</h1>
					<p>
						<List list={sampleData} />
					</p>
				</div>
			</main>
		</div>
	);
}
