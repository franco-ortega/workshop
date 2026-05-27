'use client';

import Image from 'next/image';
import { useState } from 'react';
import cat from './cat.webp';
import dog from './dog.webp';
import bird from './bird.webp';
import styles from './page.module.css';

export default function Bento() {
	const [imageOnRight, setImageOnRight] = useState('');
	const [imageOnTop, setImageOnTop] = useState('');

	const handleCatOnTop = () => setImageOnTop('cat');
	const handleBirdOnTop = () => setImageOnTop('bird');
	const handleDogOnTop = () => setImageOnTop('dog');

	const handleCatOnRight = () => setImageOnRight('cat');
	const handleBirdOnRight = () => setImageOnRight('bird');
	const handleDogOnRight = () => setImageOnRight('dog');

	return (
		<div className={styles.page}>
			<header>
				<h1>Bento Animal Grid</h1>
			</header>
			<main>
				<section className={styles.buttonOnTopWrapper}>
					<button onClick={handleBirdOnTop}>Bird on Top</button>
					<button onClick={handleCatOnTop}>Cat on Top</button>
					<button onClick={handleDogOnTop}>Dog on Top</button>
				</section>
				<section className={styles.buttonWrapper}>
					<button onClick={handleCatOnRight}>Cat on Right</button>
					<button onClick={handleBirdOnRight}>Bird on Right</button>
					<button onClick={handleDogOnRight}>Dog on Right</button>
				</section>
				<section className={styles.bentoWrapper}>
					<div
						className={`${styles.bento} ${styles.hasBorder} ${styles[imageOnRight + 'OnRight']} ${styles[imageOnTop + 'OnTop']}`}
					>
						<Image
							src={cat}
							alt='cat'
							className={styles.cat}
							width='1000'
							height='896'
						/>
						<Image
							src={bird}
							alt='bird'
							className={styles.bird}
							width='667'
							height='1000'
						/>
						<Image
							src={dog}
							alt='dog'
							className={styles.dog}
							width='976'
							height='953'
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
