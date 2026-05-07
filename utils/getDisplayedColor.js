import getDisplayedValue from './getDisplayedValue';

const getDisplayedColor = (id, children) => {
	return getDisplayedValue(id, children, 'None');
};

export default getDisplayedColor;
