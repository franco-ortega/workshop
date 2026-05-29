'use client';

import Image from 'next/image';
import { useState } from 'react';
import cat from './cat.webp';
import dog from './dog.webp';
import bird from './bird.webp';
import styles from './page.module.css';

export default function Bento() {
	const [imageOnRight, setImageOnRight] = useState('cat');
	const [imageOnTop, setImageOnTop] = useState('bird');

	const selectImage = (animal, position) => {
		if (position === 'top') {
			setImageOnTop(animal);
		} else if (position === 'right') {
			setImageOnRight(animal);
		} else {
			console.warn('Invalid position:', position, 'Or invalid animal:', animal);
		}
	};

	const handleSelectImageOnTop = (e) => {
		selectImage(e.target.textContent.toLowerCase(), 'top');
	};

	const handleSelectImageOnRight = (e) => {
		const animal = e.target.textContent.split(' ')[0].toLowerCase();
		selectImage(animal, 'right');
	};

	return (
		<div className={styles.page}>
			<header>
				<h1>Bento Animal Grid</h1>
			</header>
			<main>
				<section className={styles.buttonOnTopWrapper}>
					<p>Animal on Top</p>
					<button onClick={handleSelectImageOnTop}>Bird</button>
					<button onClick={handleSelectImageOnTop}>Cat</button>
					<button onClick={handleSelectImageOnTop}>Dog</button>
				</section>
				<section className={styles.buttonWrapper}>
					<button onClick={handleSelectImageOnRight}>Cat on Right</button>
					<button onClick={handleSelectImageOnRight}>Bird on Right</button>
					<button onClick={handleSelectImageOnRight}>Dog on Right</button>
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
