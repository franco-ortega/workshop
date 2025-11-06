import Link from 'next/link';

export default function Nav() {
	return (
		<nav>
			<ul>
				<Link href={'/'}>
					<li>Home Page</li>
				</Link>
				<Link href={'/list'}>
					<li>List App</li>
				</Link>
			</ul>
		</nav>
	);
}
