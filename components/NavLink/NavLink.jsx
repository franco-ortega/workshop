import Link from 'next/link';
import styles from './NavLink.module.css';

export default function NavLink({ url, text }) {
	return (
		<li className={styles.NavLink}>
			<Link href={`${url}`}>{text}</Link>
		</li>
	);
}
