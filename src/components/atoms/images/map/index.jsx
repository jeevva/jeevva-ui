import React from 'react';

/**
 * Component Map
 * @param {*} props
 * @returns element
 */

const Map = (props) => {
	// declare structure props
	const { children } = props;

	return <map {...props}>{children}</map>;
};

export default Map;
