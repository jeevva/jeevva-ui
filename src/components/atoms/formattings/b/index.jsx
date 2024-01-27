import React from "react";

/**
 * Component B
 * @param {*} props
 * @returns element
 */

const B = (props) => {
  // Declare structure props
  const { children } = props;

  return <b {...props}>{children}</b>;
};

export default B;
