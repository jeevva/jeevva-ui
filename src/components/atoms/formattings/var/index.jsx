import React from "react";

/**
 * Component Var
 * @param {*} props
 * @returns element
 */

const Var = (props) => {
  // Declare structure props
  const { children } = props;

  return <var {...props}>{children}</var>;
};

export default Var;
