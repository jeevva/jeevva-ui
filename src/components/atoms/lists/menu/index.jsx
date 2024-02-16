import React from "react";

/**
 * Component Menu
 * @param {*} props
 * @returns element
 */

const Menu = (props) => {
  // Declare structure props
  const { children } = props;

  return <menu {...props}>{children}</menu>;
};

export default Menu;
