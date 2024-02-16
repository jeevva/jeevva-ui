import React from "react";

/**
 * Component Video
 * @param {*} props
 * @returns element
 */

const Video = (props) => {
  // Declare structure props
  const { children } = props;

  return <video {...props}>{children}</video>;
};

export default Video;
