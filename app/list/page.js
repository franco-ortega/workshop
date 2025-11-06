// import List from '../../components/List/List';
// import styles from './page.module.css';

import List from '@/components/List/List';

export default function Home() {
	const sampleData = [
		{ id: 1, data: 'eggs' },
		{ id: 2, data: 'juice' },
		{ id: 3, data: 'cookies' },
		{ id: 4, data: 'salsa' },
		{ id: 5, data: 'salad' },
	];

	return (
		<div>
			<main>
				<div>
					<h1>List App</h1>

					<List list={sampleData} />
				</div>
			</main>
		</div>
	);
}
