import React from "react";

/**
 * Component Ul
 * @param {*} props
 * @returns element
 */

const Ul = (props) => {
  // Declare structure props
  const { children } = props;

  return <ul {...props}>{children}</ul>;
};

export default Ul;
