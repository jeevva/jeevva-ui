import React from "react";

/**
 * Component Sub
 * @param {*} props;
 * @returns element
 */

const Sub = (props) => {
  // Declare structure props
  const { children } = props;

  return <sub {...props}>{children}</sub>;
};

export default Sub;
