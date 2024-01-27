import React from "react";

/**
 * Component Blockquote
 * @param {*} props
 * @returns element
 */

const Blockquote = (props) => {
  // Declare structure props
  const { children } = props;

  return <blockquote {...props}>{children}</blockquote>;
};

export default Blockquote;
