import React from "react";
// import { options } from "../../../backend/routes/user-routes";

const Checkbox = (props) => {
  return (
    <React.Fragment>
      <label>
        <input type="checkbox" {...props} />
        {props.data}
      </label>
    </React.Fragment>
  );
};

export default Checkbox;
