import React from "react";

/**
 * Component Code
 * @param {*} props
 * @returns element
 */

const Code = (props) => {
  // Declare structure props
  const { children } = props;

  return <code {...props}>{children}</code>;
};

export default Code;
