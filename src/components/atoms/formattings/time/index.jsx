import React from "react";

/**
 * Component Time
 * @param {*} props
 * @returns element
 */

const Time = (props) => {
  // Declare structure props
  const { children } = props;

  return <time {...props}>{children}</time>;
};

export default Time;
