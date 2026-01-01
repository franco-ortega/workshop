import { removeSpaces } from './removeSpaces';

export function createId(idData) {
	const { idName } = idData;

	const randomIdNum = (Math.random() * 100000000).toFixed(0);

	return removeSpaces(randomIdNum + idName.toLowerCase());
}
