import React from "react";

/**
 * Component Nav
 * @param {*} props
 * @returns element
 */

const Nav = (props) => {
  // Declare structure props
  const { children } = props;

  return <nav {...props}>{children}</nav>;
};

export default Nav;
