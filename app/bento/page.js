import Image from 'next/image';
import React from 'react';
import cat from './cat.webp';
import dog from './dog.webp';
import bird from './bird.webp';
import styles from './page.module.css';

export default function Bento() {
	return (
		<div className={styles.page}>
			<header>
				<h1>Bento Animal Grid</h1>
			</header>
			<main>
				<section className={styles.wrapper}>
					<div className={`${styles.bento} ${styles.hasBorder}`}>
						<Image
							src={cat}
							alt='cat'
							className={styles.cat}
							width='1000'
							height='896'
						/>
						<Image
							src={dog}
							alt='dog'
							className={styles.dog}
							width='976'
							height='953'
						/>
						<Image
							src={bird}
							alt='bird'
							className={styles.bird}
							width='667'
							height='1000'
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
