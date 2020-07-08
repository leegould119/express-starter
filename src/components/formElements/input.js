import React from "react";

function Input(props) {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      autoComplete={props.autoComplete}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      {...props}
    />
  );
}

export default Input;
