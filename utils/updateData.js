import { CONSTANTS } from './constants';
import { createId } from './createId';
import { setLocalStorage } from './localStorage';

export function updateData(data) {
	const updateId = (id) => {
		const newIdBase = id.slice(0, -1);
		return createId({ idName: newIdBase });
	};

	const updatedData = data.map((list) => {
		return {
			...list,
			listId: list.listId.length < 12 ? updateId(list.listId) : list.listId,
		};
	});

	setLocalStorage(CONSTANTS.LIST, updatedData);

	return updatedData;
}
