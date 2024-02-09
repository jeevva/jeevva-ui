import React from 'react';

/**
 * Component Figcaption
 * @param {*} props
 * @returns element
 */

const Figcaption = (props) => {
	// declare structure props
	const { children } = props;

	return <figcaption {...props}>{children}</figcaption>;
};

export default Figcaption;
