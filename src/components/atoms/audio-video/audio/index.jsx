import React from 'react';

/**
 * Component Audio
 * @param {*} props
 * @returns element
 */

const Audio = (props) => {
	return <audio {...props}><source src="link_audio.mp3" type="audio/mpeg" /></audio>;
};

export default Audio;
