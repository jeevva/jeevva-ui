import React from "react";

/**
 * Component Rt
 * @param {*} props
 * @returns element
 */

const Rt = (props) => {
  // Declare structure props
  const { children } = props;

  return <rt {...props}>{children}</rt>;
};

export default Rt;
