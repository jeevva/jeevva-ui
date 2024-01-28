import React from "react";

/**
 * Component I
 * @param {*} props
 * @returns element
 */

const I = (props) => {
  // Declare structure props
  const { children } = props;

  return <i {...props}>{children}</i>;
};

export default I;
