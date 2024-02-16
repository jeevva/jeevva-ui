import React from "react";

/**
 * Component Fieldset
 * @param {*} props
 * @returns element
 */

const Fieldset = (props) => {
  // Declare structure props
  const { children } = props;

  return <fieldset {...props}>{children}</fieldset>;
};

export default Fieldset;
