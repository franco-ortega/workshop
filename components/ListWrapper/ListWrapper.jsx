import ListForm from '../Form/ListForm';
import List from '../List/List';
import styles from './ListWrapper.module.css';

function ListWrapper({ list, setList, addListItem }) {
	return (
		<section className={styles.ListWrapper}>
			{/* <ListForm addListItem={addListItem} /> */}
			<List list={list} setList={setList} addListItem={addListItem} />
		</section>
	);
}
export default ListWrapper;
