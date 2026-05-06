import getDisplayedValue from './getDisplayedValue';

const getDisplayedColor = (color, children) => {
	const baseColor = color.slice(0, color.indexOf('%') + 3);

	console.log({ color, baseColor });

	return getDisplayedValue(baseColor, children, 'None');
};

export default getDisplayedColor;
