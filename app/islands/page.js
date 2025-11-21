'use client';

import Island from '@/components/Island/Island';
import styles from './page.module.css';

export default function Islands() {
	return (
		<div className={styles.page}>
			<main>
				<div>
					<h1>Islands</h1>

					<Island
						border1={'10px'}
						border2={'10px'}
						border3={'10px'}
						border4={'10px'}
						width={'5rem'}
						height={'5rem'}
					/>
				</div>
			</main>
		</div>
	);
}
