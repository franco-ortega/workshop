import { removeSpaces } from './removeSpaces';

export function createId(idData) {
	const { title } = idData;

	const randomIdNum = (Math.random() * 100000000).toFixed(0);

	return removeSpaces(randomIdNum + title.toLowerCase());
}
