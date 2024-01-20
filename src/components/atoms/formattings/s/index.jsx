import React from "react";

/**
 * Component S
 * @param {*} props;
 * @returns element
 */

const S = (props) => {
  // Declare structure props
  const { children } = props;

  return <s {...props}>{children}</s>;
};

export default S;
