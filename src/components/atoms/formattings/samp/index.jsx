import React from "react";

/**
 * Component Samp
 * @param {*} props;
 * @returns element
 */

const Samp = (props) => {
  // Declare structure props
  const { children } = props;

  return <samp {...props}>{children}</samp>;
};

export default Samp;
