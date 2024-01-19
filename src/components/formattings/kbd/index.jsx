import React from "react";

/**
 * Component kbd
 * @param {*} props
 * @return element
 */

const Kbd = (props) => {
  // Declare structure props
  const { children } = props;

  return <kbd {...props}>{children}</kbd>;
};

export default Kbd;
