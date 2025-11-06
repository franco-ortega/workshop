import ListItem from '../ListItem/ListItem';

export default function List() {
	const sampleData = ['eggs', 'juice', 'cookies', 'salsa'];

	return (
		<ol>
			{sampleData.map((data) => (
				<ListItem key={'1'} data={data} />
			))}
		</ol>
	);
}
