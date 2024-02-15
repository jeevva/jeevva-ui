import React from "react";

/**
 * Component Td
 * @param {*} props
 * @returns element
 */

const Td = (props) => {
  // Declare structure props
  const { children } = props;

  return <td {...props}>{children}</td>;
};

export default Td;
