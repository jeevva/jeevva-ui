import React from "react";

/**
 * Component Dfn
 * @param {*} props
 * @returns element
 */

const Dfn = (props) => {
  // Declare structure props
  const { children } = props;

  return <dfn {...props}>{children}</dfn>;
};

export default Dfn;
