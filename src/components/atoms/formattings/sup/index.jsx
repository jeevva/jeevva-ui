import React from "react";

/**
 * Component Sup
 * @param {*} props
 * @returns element
 */

const Sup = (props) => {
  // Declare structure props
  const { children } = props;

  return <sup {...props}>{children}</sup>;
};

export default Sup;
