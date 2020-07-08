import React from "react";

function Checkbox(props) {
  return (
    <React.Fragment>
      {props.options.map((option, index) => {
        return (
          <label key={index}>
            {option}
            <input
              type="checkbox"
              name={props.name}
              id={props.id}
              onChange={option.handleChange}
            />
          </label>
        );
      })}
    </React.Fragment>
  );
}

export default Checkbox;
