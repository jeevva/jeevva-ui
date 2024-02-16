import React from "react";

/**
 * Component Tfoot
 * @param {*} props
 * @returns element
 */

const Tfoot = (props) => {
  // Declare structure props
  const { children } = props;

  return <tfoot {...props}>{children}</tfoot>;
};

export default Tfoot;
