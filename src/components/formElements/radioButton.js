import React from "react";

function RadioButton(props) {
  return (
    <div>
      {props.options.map((option, index) => {
        return (
          <label key={index}>
            {option}
            <input
              type="radio"
              id={option}
              value={option}
              name={props.id}
              onChange={props.handleChange}
            />
          </label>
        );
      })}
    </div>
  );
}

export default RadioButton;
