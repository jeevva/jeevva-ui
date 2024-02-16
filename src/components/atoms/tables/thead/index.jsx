import React from "react";

/**
 * Component Thead
 * @param {*} props
 * @returns element
 */

const Thead = (props) => {
  // Declare structure props
  const { children } = props;

  return <thead {...props}>{children}</thead>;
};

export default Thead;
