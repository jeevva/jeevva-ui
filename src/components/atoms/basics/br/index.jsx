import React from "react";

/**
 * Component Br
 * @param {*} props
 * @returns element
 */

const Br = (props) => {
  // Declare structure props
  const { children } = props;

  return <br {...props}>{children}</br>;
};

export default Br;