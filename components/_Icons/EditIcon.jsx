import Image from 'next/image';
import styles from './Icon.module.css';

export default function EditIcon() {
	return (
		<span className={styles.Icon}>
			<Image
				src='/icons/edit-icon-feather.svg' // Path to your SVG file
				alt='Edit Icon'
				width={15} // Specify the width
				height={15} // Specify the height
			/>
		</span>
	);
}
