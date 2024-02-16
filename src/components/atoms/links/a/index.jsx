import React from "react";

/**
 * Component A
 * @param {*} props
 * @returns element
 */

const A = (props) => {
  // Declare structure props
  const { children } = props;

  return <a {...props}>{children}</a>;
};

export default A;
