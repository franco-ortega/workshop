'use client';

import List from '@/components/List/List';
import Form from '@/components/Form/Form';
import styles from './page.module.css';

export default function Home() {
	const sampleData = [
		{ id: 1, data: 'eggs' },
		{ id: 2, data: 'juice' },
		{ id: 3, data: 'cookies' },
		{ id: 4, data: 'salsa' },
		{ id: 5, data: 'salad' },
	];

	return (
		<div className={styles.page}>
			<main>
				<div>
					<h1>List App</h1>
					<List list={sampleData} />

					<div>
						<Form buttonText={'Add Item'} />
					</div>
				</div>
			</main>
		</div>
	);
}
