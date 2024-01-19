import React from "react";

/**
 * Component Kbd
 * @param {*} props
 * @returns element
 */

const Kbd = (props) => {
  // Declare structure props
  const { children } = props;

  return <kbd {...props}>{children}</kbd>;
};

export default Kbd;
