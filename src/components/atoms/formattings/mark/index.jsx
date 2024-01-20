import React from "react";

/**
 * Component Mark
 * @param {*} props
 * @returns element
 */

const Mark = (props) => {
  // Declare structure props
  const { children } = props;

  return <mark {...props}>{children}</mark>;
};

export default Mark;
