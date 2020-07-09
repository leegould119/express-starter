import React from "react";

const Button = (props) => {
  return (
    <input
      type="submit"
      value={props.value}
      style={props.style}
      onClick={props.action}
      {...props}
    />
  );
};

export default Button;
