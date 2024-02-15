import React from "react";

/**
 * Component Table
 * @param {*} props
 * @returns element
 */

const Table = (props) => {
  // Declare structure props
  const { children } = props;

  return <table {...props}>{children}</table>;
};

export default Table;
