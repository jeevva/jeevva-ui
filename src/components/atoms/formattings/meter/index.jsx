import React from "react";

/**
 * Component Meter
 * @param {*} props
 * @returns element
 */

const Meter = (props) => {
  // Declare structure props
  const { children } = props;

  return <meter {...props}>{children}</meter>;
};

export default Meter;
