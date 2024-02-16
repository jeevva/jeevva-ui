import React from "react";

/**
 * Component Li
 * @param {*} props
 * @returns element
 */

const Li = (props) => {
  // Declare structure props
  const { children } = props;

  return <li {...props}>{children}</li>;
};

export default Li;
