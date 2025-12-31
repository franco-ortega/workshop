import { CONSTANTS } from './constants';
import { setLocalStorage } from './localStorage';

export function updateData(data) {
	const updatedData = data.map((list) => {
		return { ...list, listId: list.listId.toLowerCase() };
	});

	setLocalStorage(CONSTANTS.LIST, updatedData);

	return updatedData;
}
