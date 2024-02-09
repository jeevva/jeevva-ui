import React from 'react';

/**
 * Component Figure
 * @param {*} props
 * @returns element
 */

const Figure = (props) => {
	// declare structure props
	const { children } = props;

	return <figure {...props}>{children}</figure>;
};

export default Figure;
