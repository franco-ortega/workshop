import Image from 'next/image';
import styles from './IconButton.module.css';

function IconButton({ clickHandler, iconAlt, iconPath }) {
	return (
		<button className={styles.IconButton} onClick={clickHandler}>
			<Image
				src={iconPath} // Path to your SVG file
				alt={`${iconAlt} Icon`}
				width={15} // Specify the width
				height={15} // Specify the height
			/>
		</button>
	);
}
export default IconButton;
