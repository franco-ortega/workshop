import Link from 'next/link';

export default function NavLink({ url, text }) {
	return (
		<li>
			<Link href={`${url}`}>{text}</Link>
		</li>
	);
}
