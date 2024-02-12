import React from "react";

/**
 * Component Dd
 * @param {*} props
 * @returns element
 */

const Dd = (props) => {
  // Declare structure props
  const { children } = props;

  return <dd {...props}>{children}</dd>;
};

export default Dd;
