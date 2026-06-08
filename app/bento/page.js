'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import cat from './cat.webp';
import dog from './dog.webp';
import bird from './bird.webp';
import styles from './page.module.css';

export default function Bento() {
	const [featuredImage, setFeaturedImage] = useState('bird');
	const [isFading, setIsFading] = useState(false);
	const timersRef = useRef([]);

	// duration must match CSS --fade-duration
	const FADE_DURATION = 200;

	const fadeEffectStyle = isFading ? styles.fadingOut : styles.fadingIn;

	useEffect(() => {
		const currentRef = timersRef.current;

		return () => {
			currentRef.forEach((id) => clearTimeout(id));
		};
	}, []);

	const swapImage = (animal, position) => {
		const prefersReduced =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReduced) {
			// immediate change without fading
			if (featuredImage) setFeaturedImage(animal);
			else console.warn('Invalid image:', animal);

			return;
		}

		setIsFading(true);

		const id = setTimeout(() => {
			if (featuredImage) setFeaturedImage(animal);
			else console.warn('Invalid image:', animal);

			const id2 = setTimeout(() => setIsFading(false), 20);

			timersRef.current.push(id2);
		}, FADE_DURATION);

		timersRef.current.push(id);
	};

	const handleSelectImageOnTop = (e) =>
		swapImage(e.target.textContent.toLowerCase(), 'top');

	const handleSelectImageOnRight = (e) =>
		swapImage(e.target.textContent.toLowerCase(), 'right');

	return (
		<div className={styles.page}>
			<header>
				<h1>Bento Animal Grid</h1>
			</header>
			<main>
				<section className={styles.imageOnTopButtonWrapper}>
					<p>Animal on Top</p>
					<button onClick={handleSelectImageOnTop}>Bird</button>
					<button onClick={handleSelectImageOnTop}>Cat</button>
					<button onClick={handleSelectImageOnTop}>Dog</button>
				</section>

				<section className={styles.imageOnRightButtonWrapper}>
					<p>Animal on Right</p>
					<button onClick={handleSelectImageOnRight}>Bird</button>
					<button onClick={handleSelectImageOnRight}>Cat</button>
					<button onClick={handleSelectImageOnRight}>Dog</button>
				</section>

				<section className={styles.bentoWrapper}>
					<div
						className={`${styles.bento} 
							
							${styles[featuredImage + 'OnRight']} 
							${styles[featuredImage + 'OnTop']}
              `}
					>
						<Image
							src={cat}
							alt='cat'
							className={`${styles.cat} ${fadeEffectStyle}`}
							width='1000'
							height='896'
						/>
						<Image
							src={bird}
							alt='bird'
							className={`${styles.bird} ${fadeEffectStyle}`}
							width='667'
							height='1000'
						/>
						<Image
							src={dog}
							alt='dog'
							className={`${styles.dog} ${fadeEffectStyle}`}
							width='976'
							height='953'
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
