import React from "react";

/**
 * Component Q
 * @param {*} props;
 * @returns element
 */

const Q = (props) => {
  // Declare structure props
  const { children } = props;

  return <q {...props}>{children}</q>;
};

export default Q;
