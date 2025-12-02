import Image from 'next/image';
import styles from './Icon.module.css';

export default function TrashIcon() {
	return (
		<span className={styles.Icon}>
			<Image
				src='/icons/trash-icon-feather.svg'
				alt='Trash Icon'
				width={15}
				height={15}
			/>
		</span>
	);
}
