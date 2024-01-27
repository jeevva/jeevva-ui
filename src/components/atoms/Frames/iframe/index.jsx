import React from 'react';

/**
 * Component Datalist
 * @param {*} props
 * @returns element
 */

const Iframe = (props) => {
	return (
		<iframe
			title={props.title}
			{...props}
		/>
	);
};

export default Iframe;
