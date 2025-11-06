import Link from 'next/link';
import NavLink from '../NavLink/NavLink';

export default function Nav() {
	return (
		<nav>
			<ul>
				<NavLink url={'/'} text={'Home'} />
				<NavLink url={'/list'} text={'List App'} />
			</ul>
		</nav>
	);
}
