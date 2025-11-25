import ListItem from '../ListItem/ListItem';

export default function List({ list }) {
	console.log(list);
	return (
		<ul>
			{list.map((item) => (
				<ListItem key={item.id} item={item.data} />
			))}
		</ul>
	);
}
