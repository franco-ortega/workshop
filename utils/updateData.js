import { CONSTANTS } from './constants';
import { createId } from './createId';
import { setLocalStorage } from './localStorage';

export function updateData(data) {
	const updateListId = (id) => {
		const newIdBase = id.slice(0, -1);
		return createId({ idName: newIdBase });
	};

	// const updateItemId = (item) => {
	// 	const { data, title } = item;

	// 	const newItemId = createId({
	// 		idName: `${title}_${data}`,
	// 	});

	// 	return newItemId;
	// };

	const updatedData = data.map((list) => {
		return {
			...list,
			listId: list.listId.length < 12 ? updateListId(list.listId) : list.listId,
		};
	});

	setLocalStorage(CONSTANTS.LIST, updatedData);

	return updatedData;
}
