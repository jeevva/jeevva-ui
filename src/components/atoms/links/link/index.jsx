import React from "react";

/**
 * Component Link
 * @param {*} props
 * @returns element
 */

const Link = (props) => {
  // Declare structure props
  const { children } = props;

  return <link {...props}>{children}</link>;
};

export default Link;
