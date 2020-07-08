import React, { Component } from "react";
import AuthApi from "../api/loginApi";
import {
  Input,
  Button,
  Checkbox,
  RadioButton
} from "../components/formElements";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVals: {
        userName: null,
        userPassword: null,
        userPasswordVerify: null,
        gender: null
      }
    };
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState((prevstate) => ({
      formVals: { ...prevstate.formVals, [name]: value }
    }));
  };

  handleSubmit = (event) => {
    let { formVals } = this.state;
    event.preventDefault();
    console.log("submitted" + JSON.stringify(formVals));
    // TODO check to see if the form is valid

    AuthApi(formVals)
      .then(async (resp) => {
        await console.log(resp);
      })
      .catch(async (err) => {
        await console.log(err);
      });
  };

  render() {
    let { formVals } = this.state;
    console.log(
      "Theese are the values of the form " + JSON.stringify(formVals)
    );

    let genderVals = ["male", "female", "other"];

    return (
      <React.Fragment>
        <form method="POST" onSubmit={this.handleSubmit}>
          <Input
            id="userName"
            type="text"
            autoComplete="user-name"
            name="userName"
            placeholder="User Name"
            onChange={this.handleChange}
          />
          <Input
            id="usersPassword"
            type="password"
            autoComplete="user-password"
            name="userPassword"
            placeholder="User Password"
            onChange={this.handleChange}
          />
          <Input
            id="userPasswordVerify"
            type="password"
            autoComplete="new-password"
            name="userPasswordVerify"
            placeholder="User Password Verify"
            onChange={this.handleChange}
          />
          <RadioButton
            id="gender"
            options={genderVals}
            handleChange={this.handleChange}
          />

          <Button value="login" />
        </form>
      </React.Fragment>
    );
  }
}
