import ListItem from '../ListItem/ListItem';

export default function List({ list }) {
	return (
		<ol>
			{list.map((item) => (
				<ListItem key={'1'} item={item} />
			))}
		</ol>
	);
}
