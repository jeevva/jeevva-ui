import React from "react";

/**
 * Component Optgroup
 * @param {*} props
 * @returns element
 */

const Optgroup = (props) => {
  // Declare structure props
  const { children } = props;

  return <optgroup {...props}>{children}</optgroup>;
};

export default Optgroup;
