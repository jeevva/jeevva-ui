import React from "react";

/**
 * Component Ruby
 * @param {*} props;
 * @returns element
 */

const Ruby = (props) => {
  // Declare structure props
  const { children } = props;

  return <ruby {...props}>{children}</ruby>;
};

export default Ruby;
