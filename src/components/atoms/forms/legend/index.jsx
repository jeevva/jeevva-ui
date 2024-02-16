import React from "react";

/**
 * Component Legend
 * @param {*} props
 * @returns element
 */

const Legend = (props) => {
  // Describe structure props
  const { children } = props;

  return <legend {...props}>{children}</legend>;
};

export default Legend;
