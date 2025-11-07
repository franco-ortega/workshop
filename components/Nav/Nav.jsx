import NavLink from '../NavLink/NavLink';
import styles from './Nav.module.css';

export default function Nav() {
	return (
		<nav className={styles.Nav}>
			<ul>
				<NavLink url={'/'} text={'Home'} />
				<NavLink url={'/list'} text={'List App'} />
			</ul>
		</nav>
	);
}
