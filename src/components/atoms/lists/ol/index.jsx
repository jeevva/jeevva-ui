import React from "react";

/**
 * Component Ol
 * @param {*} props
 * @returns element
 */

const Ol = (props) => {
  // Declare structure props
  const { children } = props;

  return <ol {...props}>{children}</ol>;
};

export default Ol;
