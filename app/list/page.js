'use client';

import List from '@/components/List/List';
import Form from '@/components/Form/Form';
import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
	const sampleData = [
		{ id: 1, data: 'eggs' },
		{ id: 2, data: 'juice' },
		{ id: 3, data: 'cookies' },
		{ id: 4, data: 'salsa' },
		{ id: 5, data: 'salad' },
	];

	const [list, setList] = useState([{ id: 0, data: 'nada' }]);

	const addListItem = ({ item }) => {
		setList((prevState) => [
			...prevState,
			{
				id: prevState[0].id + 1 || 1,
				data: item,
			},
		]);
	};

	console.log(list);

	return (
		<div className={styles.page}>
			<main>
				<div>
					<h1>List App</h1>
					<List list={sampleData} />

					<div>
						<Form handler={addListItem} buttonText={'Add Item'} />
					</div>
				</div>
			</main>
		</div>
	);
}
