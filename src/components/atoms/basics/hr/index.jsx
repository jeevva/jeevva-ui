import React from "react";

/**
 * Component Hr
 * @param {*} props
 * @returns element
 */

const Hr = (props) => {
  // Declare structure props
  const { children } = props;

  return <hr {...props}>{children}</hr>;
};

export default Hr;