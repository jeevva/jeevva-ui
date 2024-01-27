import React from 'react';

/**
 * Component Output
 * @param {*} props
 * @returns element
 */

const Output = (props) => {
	// declare structure props
	const { children } = props;

	return <output {...props}>{children}</output>;
};

export default Output;
