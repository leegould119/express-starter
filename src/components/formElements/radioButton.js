import React from "react";

const RadioButton = (props) => {
  return (
    <div>
      {props.options.map((option, index) => {
        return (
          <label key={index}>
            {(() => {
              if (props.data === option) {
                return (
                  <input
                    type="radio"
                    id={option}
                    value={option}
                    name={props.id}
                    onChange={props.handleChange}
                    checked={true}
                  />
                );
              } else {
                return (
                  <input
                    type="radio"
                    id={option}
                    value={option}
                    name={props.id}
                    onChange={props.handleChange}
                    checked={false}
                  />
                );
              }
            })()}
            {option}
          </label>
        );
      })}
    </div>
  );
};

export default RadioButton;
