import Item from '../Item/Item';

export default function ListItem({ item }) {
	return (
		<li>
			<Item item={item} />
		</li>
	);
}
