import React from "react";

/**
 * Component Ins
 * @param {*} props
 * @returns element
 */

const Ins = (props) => {
  // Declare structure props
  const { children } = props;

  return <ins {...props}>{children}</ins>;
};

export default Ins;
