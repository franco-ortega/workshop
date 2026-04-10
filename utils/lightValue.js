export const lightValue = (color) => {
	if (!color) return 0;

	return color.slice(color.indexOf('%') + 3, color.lastIndexOf('%'));
};
