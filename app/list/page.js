import List from '../components/List/List';
// import styles from './page.module.css';

export default function Home() {
	const sampleData = ['eggs', 'juice', 'cookies', 'salsa', 'salad'];

	return (
		<div>
			<main>
				<div>
					<h2>List App</h2>
					<p>
						<List list={sampleData} />
					</p>
				</div>
			</main>
		</div>
	);
}
