import React from "react";

/**
 * Component Th
 * @param {*} props
 * @returns element
 */

const Th = (props) => {
  // Declare structure props
  const { children } = props;

  return <th {...props}>{children}</th>;
};

export default Th;
