import React from "react";

/**
 * Component Tbody
 * @param {*} props
 * @returns element
 */

const Tbody = (props) => {
  // Declare structure props
  const { children } = props;

  return <tbody {...props}>{children}</tbody>;
};

export default Tbody;
