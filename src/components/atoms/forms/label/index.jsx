import React from "react";

/**
 * Component Label
 * @param {*} props
 * @returns element
 */

const Label = (props) => {
  // Declare structure props
  const { children } = props;

  return <label {...props}>{children}</label>;
};

export default Label;
