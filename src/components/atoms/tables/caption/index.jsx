import React from "react";

/**
 * Component Caption
 * @param {*} props
 * @returns element
 */

const Caption = (props) => {
  // Declare structure props
  const { children } = props;

  return <caption {...props}>{children}</caption>;
};

export default Caption;
