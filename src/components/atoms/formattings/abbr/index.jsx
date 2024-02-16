import React from "react";

/**
 * Component Abbr
 * @param {*} props
 * @returns element
 */

const Abbr = (props) => {
  // Declare structure props
  const { children } = props;

  return <abbr {...props}>{children}</abbr>;
};

export default Abbr;