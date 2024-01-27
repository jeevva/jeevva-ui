import React from "react";

/**
 * Component Address
 * @param {*} props
 * @returns element
 */

const Address = (props) => {
  // Declare structure props
  const { children } = props;

  return <address {...props}>{children}</address>;
};

export default Address;
