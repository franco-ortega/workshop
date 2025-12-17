import Icon from './Icon';
import styles from './IconButton.module.css';

function IconButton({ clickHandler, iconAlt, iconPath }) {
	return (
		<button className={styles.IconButton} onClick={clickHandler}>
			<Icon iconAlt={iconAlt} iconPath={iconPath} />
		</button>
	);
}
export default IconButton;
