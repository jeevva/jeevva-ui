import React from "react";

/**
 * Component Pre
 * @param {*} props
 * @returns element
 */

const Pre = (props) => {
  // Declare structure props
  const { children } = props;

  return <pre {...props}>{children}</pre>;
};

export default Pre;
