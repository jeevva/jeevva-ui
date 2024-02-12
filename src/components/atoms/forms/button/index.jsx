import React from "react";

/**
 * Component Button
 * @param {*} props
 * @returns element
 */

const Button = (props) => {
  // Declare structure props
  const { children } = props;

  return <button {...props}>{children}</button>;
};

export default Button;
