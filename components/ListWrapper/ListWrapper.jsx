import ListForm from '../Form/ListForm';
import List from '../List/List';
import styles from './ListWrapper.module.css';

function ListWrapper({ setList, addListItem, lists }) {
	return (
		<section className={styles.ListWrapper}>
			{lists &&
				lists.map((list) => (
					<List
						key={list.listId}
						setList={setList}
						addListItem={addListItem}
						list={list}
					/>
				))}
		</section>
	);
}
export default ListWrapper;
