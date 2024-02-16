import React from "react";

/**
 * Component Textarea
 * @param {*} props
 * @returns element
 */

const Textarea = (props) => {
  // Declare structure props
  const { children } = props;

  return <textarea {...props}>{children}</textarea>;
};

export default Textarea;
