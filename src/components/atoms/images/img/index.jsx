import React from 'react';

/**
 * Component Img
 * @param {*} props
 * @returns element
 */

const Img = (props) => {
	return (
		<img
			alt={props.alt}
			{...props}
		/>
	);
};

export default Img;
