'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import cat from './cat.webp';
import dog from './dog.webp';
import bird from './bird.webp';
import styles from './page.module.css';

export default function Bento() {
	const [imageOnRight, setImageOnRight] = useState('cat');
	const [imageOnTop, setImageOnTop] = useState('bird');
	const [isFading, setIsFading] = useState(false);
	const timersRef = useRef([]);

	// duration must match CSS --fade-duration
	const FADE_DURATION = 200;

	useEffect(() => {
		const currentRef = timersRef.current;
		return () => {
			currentRef.forEach((id) => clearTimeout(id));
		};
	}, []);

	const swapImage = (animal, position) => {
		const prefersReduced =
			typeof window !== 'undefined' &&
			window.matchMedia &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReduced) {
			// immediate change without fading
			if (position === 'top') setImageOnTop(animal);
			else if (position === 'right') setImageOnRight(animal);
			else
				console.warn(
					'Invalid position:',
					position,
					'Or invalid animal:',
					animal,
				);
			setIsFading(false);
			return;
		}

		setIsFading(true);

		const id = setTimeout(() => {
			if (position === 'top') setImageOnTop(animal);
			else if (position === 'right') setImageOnRight(animal);
			else
				console.warn(
					'Invalid position:',
					position,
					'Or invalid animal:',
					animal,
				);

			const id2 = setTimeout(() => setIsFading(false), 20);

			timersRef.current.push(id2);
		}, FADE_DURATION);

		timersRef.current.push(id);
	};

	const handleSelectImageOnTop = (e) => {
		swapImage(e.target.textContent.toLowerCase(), 'top');
	};

	const handleSelectImageOnRight = (e) => {
		// takes animal name out of 'ANIMAL on Right' button text
		const animal = e.target.textContent.split(' ')[0].toLowerCase();

		swapImage(animal, 'right');
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
						className={[
							styles.bento,
							styles[imageOnRight + 'OnRight'],
							styles[imageOnTop + 'OnTop'],
							isFading ? styles.fadingOut : styles.fadingIn,
						].join(' ')}
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
