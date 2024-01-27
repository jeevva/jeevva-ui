import React from "react";

/**
 * Component Strong
 * @param {*} props;
 * @returns element
 */

const Strong = (props) => {
  // Declare structure props
  const { children } = props;

  return <strong {...props}>{children}</strong>;
};

export default Strong;
