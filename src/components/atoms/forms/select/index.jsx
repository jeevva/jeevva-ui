import React from "react";

/**
 * Component Select
 * @param {*} props
 * @returns element
 */

const Select = (props) => {
  // Declare structure props
  const { children } = props;

  return <select {...props}>{children}</select>;
};

export default Select;
