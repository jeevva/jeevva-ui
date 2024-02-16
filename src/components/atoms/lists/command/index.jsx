import React from "react";

/**
 * Component Command
 * @param {*} props
 * @returns element
 */

const Command = (props) => {
  // Declare structure props
  const { children } = props;

  return <command {...props}>{children}</command>;
};

export default Command;
