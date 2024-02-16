import React from "react";

/**
 * Component P
 * @param {*} props
 * @returns element
 */

const P = (props) => {
  // Declare structure props
  const { children } = props;

  return <p {...props}>{children}</p>;
};

export default P;
