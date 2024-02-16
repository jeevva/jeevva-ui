import React from "react";

/**
 * Component Dt
 * @param {*} props
 * @returns element
 */

const Dt = (props) => {
  // Declare structure props
  const { children } = props;

  return <dt {...props}>{children}</dt>;
};

export default Dt;
