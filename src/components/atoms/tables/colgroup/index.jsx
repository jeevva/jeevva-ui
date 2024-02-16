import React from "react";

/**
 * Component Colgroup
 * @param {*} props
 * @returns element
 */

const Colgroup = (props) => {
  // Declare structure props
  const { children } = props;

  return <colgroup {...props}>{children}</colgroup>;
};

export default Colgroup;
