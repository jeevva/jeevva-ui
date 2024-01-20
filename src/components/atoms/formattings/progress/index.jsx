import React from "react";

/**
 * Component Progress
 * @param {*} props
 * @returns element
 */

const Progress = (props) => {
  // Declare structure props
  const { children } = props;

  return <progress {...props}>{children}</progress>;
};

export default Progress;
