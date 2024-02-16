import React from "react";

/**
 * Component U
 * @param {*} props
 * @returns element
 */

const U = (props) => {
  // Declare structure props
  const { children } = props;

  return <u {...props}>{children}</u>;
};

export default U;
