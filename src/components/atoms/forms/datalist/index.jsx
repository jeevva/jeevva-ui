import React from 'react';

/**
 * Component Datalist
 * @param {*} props
 * @returns element
 */

const Datalist = (props) => {
	// declare structure props
	const { children } = props;

	return <datalist {...props}>{children}</datalist>;
};

export default Datalist;
