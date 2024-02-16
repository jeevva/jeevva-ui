import React from "react";

/**
 * Component Dl
 * @param {*} props
 * @returns element
 */

const Dl = (props) => {
  // Declare structure props
  const { children } = props;

  return <dl {...props}>{children}</dl>;
};

export default Dl;
