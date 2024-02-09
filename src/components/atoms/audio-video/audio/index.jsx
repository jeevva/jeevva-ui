import React from 'react';

/**
 * Component Audio
 * @param {*} props
 * @returns element
 */

const Audio = (props) => {
	return (
		<audio
			alt={props.alt}
			{...props}
		/>
	);
};

export default Audio;
