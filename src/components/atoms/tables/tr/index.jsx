import React from "react";

/**
 * Component Tr
 * @param {*} props
 * @returns element
 */

const Tr = (props) => {
  // Declare structure props
  const { children } = props;

  return <tr {...props}>{children}</tr>;
};

export default Tr;
