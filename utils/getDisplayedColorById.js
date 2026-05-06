import React from 'react';

const getDisplayedColorById = (id, children, defaultValue) => {
	const childArray = React.Children.toArray(children);
	const selectedChild = childArray.find((child) => child.props.id === id);
	return selectedChild ? selectedChild.props.children : 'No Color';
};

export default getDisplayedColorById;
