import { removeSpaces } from './removeSpaces';

export function createId(idData) {
	const { title, lastId } = idData;

	const titleLength = title.length;
	const lastIdNumber = Number(lastId.slice(titleLength));
	const newId = title + (lastIdNumber + 1);
	return removeSpaces(newId);
}
