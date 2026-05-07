import React from 'react';

const getDisplayedValue = (value, children, defaultValue) => {
	const childArray = React.Children.toArray(children);
	const selectedChild = childArray.find((child) => child.props.value === value);
	return selectedChild ? selectedChild.props.children : defaultValue;
};

export default getDisplayedValue;
