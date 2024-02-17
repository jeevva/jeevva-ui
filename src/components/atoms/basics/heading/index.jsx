import React from "react";

/**
 * Component Heading
 * @param {*} props
 * @returns element
 */


const Heading = (props) => {
  // Declare structure props
  const { children, size } = props;
    switch (size) {
      case size===2:
       return <h2 {...props}>{children}</h2>;
      case size===3:
        return <h3 {...props}>{children}</h3>;
      case size===4:
        return <h4 {...props}>{children}</h4>;
      case size===5:
       return <h5 {...props}>{children}</h5>;
      case size===6:
        return <h6 {...props}>{children}</h6>;
      default:
        return <h1 {...props}>{children}</h1>;
    }
};

export default Heading;