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
				<div className={styles.ctas}>
					{/* <a
						className={styles.primary}
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					> */}
					Deploy Now
					{/* </a> */} -
					{/* <a
						className={styles.secondary}
						href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					> */}
					Documentation
					{/* </a> */}
				</div>
			</main>
		</div>
	);
}
