import React from "react";

/**
 * Component Col
 * @param {*} props
 * @returns element
 */

const Col = (props) => {
  // Declare structure props
  const { children } = props;

  return <col {...props}>{children}</col>;
};

export default Col;
