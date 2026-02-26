import List from '../List/List';
import styles from './ListWrapper.module.css';

function ListWrapper({ addListItem, lists, setLists }) {
	return (
		<ul className={styles.ListWrapper}>
			{lists.map((list, i) => (
				<List
					key={list.listId}
					setLists={setLists}
					addListItem={addListItem}
					list={list}
					listIndex={i}
				/>
			))}
		</ul>
	);
}
export default ListWrapper;
