import React from "react";

/**
 * Component Bdo
 * @param {*} props
 * @returns element
 */

const Bdo = (props) => {
  // Declare structure props
  const { children } = props;

  return <bdo {...props}>{children}</bdo>;
};

export default Bdo;
