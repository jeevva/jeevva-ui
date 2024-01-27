import React from "react";

/**
 * Component Bdi
 * @param {*} props
 * @returns element
 */

const Bdi = (props) => {
  // Declare structure props
  const { children } = props;

  return <bdi {...props}>{children}</bdi>;
};

export default Bdi;
