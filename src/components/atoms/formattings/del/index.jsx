import React from "react";

/**
 * Component Del
 * @param {*} props
 * @returns element
 */

const Del = (props) => {
  // Declare structure props
  const { children } = props;

  return <del {...props}>{children}</del>;
};

export default Del;
