export const lightValue = (color) => {
	if (!color) return 0;

	return Number(color.slice(color.indexOf('%') + 3, color.lastIndexOf('%')));
};
