import React from "react";

/**
 * Component Cite
 * @param {*} props
 * @returns element
 */

const Cite = (props) => {
  // Declare structure props
  const { children } = props;

  return <cite {...props}>{children}</cite>;
};

export default Cite;
