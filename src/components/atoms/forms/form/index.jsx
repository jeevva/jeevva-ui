import React from "react";

/**
 * Component Form
 * @param {*} props
 * @returns element
 */

const Form = (props) => {
  // Declare structure props
  const { children } = props;

  return <form {...props}>{children}</form>;
};

export default Form;
