import React from 'react';

/**
 * Component Canvas
 * @param {*} props
 * @returns element
 */

const Canvas = (props) => {
	// declare structure props
	const { children } = props;

	return <canvas {...props}>{children}</canvas>;
};

export default Canvas;
