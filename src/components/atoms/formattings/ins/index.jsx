import React from "react";

/**
 * Component ins
 * @param {*} props
 * @returns element
 */

const Ins = (props) => {
  //declare structure props
  const { children } = props;

  return <ins {...props}>{children}</ins>;
};

export default Ins;
