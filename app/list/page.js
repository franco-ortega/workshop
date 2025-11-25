'use client';

import List from '@/components/List/List';
import Form from '@/components/Form/Form';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
	const sampleData = [
		{ id: 1, data: 'eggs' },
		{ id: 2, data: 'juice' },
		{ id: 3, data: 'cookies' },
		{ id: 4, data: 'salsa' },
		{ id: 5, data: 'salad' },
	];

	const [list, setList] = useState([]);

	useEffect(() => {
		const storedList = JSON.parse(localStorage.getItem('LIST'));
		if (storedList) setList(storedList);
	}, []);

	const addListItem = (item) => {
		setList((prevState) => {
			const updatedList = [
				...prevState,
				{
					//check to see that at least one item exists before incrementing id
					id: prevState[prevState.length - 1]
						? prevState[prevState.length - 1].id + 1
						: // otherwise give first item an id of 1
						  1,
					data: item,
				},
			];

			const stringyList = JSON.stringify(updatedList);
			localStorage.setItem('LIST', stringyList);

			return updatedList;
		});
	};

	return (
		<div className={styles.page}>
			<main>
				<div>
					<h1>List App</h1>
					{/* <List list={sampleData} /> */}

					<div>
						<Form handler={addListItem} buttonText={'Add Item'} />
						{list.length ? (
							<List list={list} />
						) : (
							'No list yet. Why not create one?'
						)}
					</div>
				</div>
			</main>
		</div>
	);
}
