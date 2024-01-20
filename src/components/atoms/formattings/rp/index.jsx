import React from "react";

/**
 * Component Rp
 * @param {*} props
 * @returns element
 */

const Rp = (props) => {
  // Declare structure rp
  const { children } = props;

  return <rp {...props}>{children}</rp>;
};

export default Rp;
