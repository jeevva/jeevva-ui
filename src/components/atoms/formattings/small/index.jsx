import React from "react";

/**
 * Component Small
 * @param {*} props;
 * @returns element
 */

const Small = (props) => {
  // Declare structure props
  const { children } = props;

  return <small {...props}>{children}</small>;
};

export default Small;
