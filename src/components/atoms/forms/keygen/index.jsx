import React from 'react';

/**
 * Component Keygen
 * @param {*} props
 * @returns element
 */

const Keygen = (props) => {
	// declare structure props
	const { children } = props;

	return <keygen {...props}>{children}</keygen>;
};

export default Keygen;
