import React from "react";

/**
 * Component Option
 * @param {*} props
 * @returns element
 */

const Option = (props) => {
  // Declare structure props
  const { children } = props;

  return <option {...props}>{children}</option>;
};

export default Option;
