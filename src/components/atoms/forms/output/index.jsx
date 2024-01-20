import React from 'react';

/**
 * Component Datalist
 * @param {*} props
 * @returns element
 */

const Output = (props) => {
	// declare structure props
	const { children } = props;

	return <output {...props}>{children}</output>;
};

export default Output;
