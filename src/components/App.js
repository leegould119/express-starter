import React, { Component } from "react";
import AuthApi from "../api/loginApi";
import getUserProfile from "../api/getUserProfileApi";
import {
  Input,
  Button,
  Checkbox,
  RadioButton,
  Textarea
} from "../components/formElements";
import Select from "react-select";
import Cities from "../staticData/cities";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVals: {
        userName: "",
        userPassword: "",
        userPasswordVerify: "",
        gender: "",
        termsAndConditions: false,
        rememberMe: true,
        selectedCity: { value: "", label: "" },
        description: "",
        rangeValue: ""
      }
    };
  }

  componentDidMount = () => {
    // get the user data from an enpoint that has stored the data in a database
    getUserProfile()
      .then(async (resp) => {
        console.log(resp.selectedCity.value);
        this.setState(
          (prevstate) => ({
            formVals: {
              ...prevstate.formVals,
              ...resp
            }
          }),
          () => {
            console.log(this.state.formVals);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });

    // set the data into the state
  };

  handleChange = (event) => {
    let { name, value } = event.currentTarget;

    try {
      this.setState((prevstate) => ({
        formVals: { ...prevstate.formVals, [name]: value }
      }));
    } catch (error) {
      console.log(error);
    }
  };

  handleCheckboxChange = (event) => {
    let { type, name, value, checked } = event.currentTarget;
    const Value = type === "checkbox" ? checked : value;
    // console.log("Value:" + Value);
    try {
      this.setState((prevstate) => ({
        formVals: { ...prevstate.formVals, [name]: Value }
      }));
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = (event) => {
    // sending in the data to an endpoint for saveing into a database so that the information is available later on.
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

  handleSelectChange = (selectedOption) => {
    // console.log(selectedOption);
    try {
      this.setState((prevstate) => ({
        formVals: {
          ...prevstate.formVals,
          selectedCity: {
            value: selectedOption.value,
            label: selectedOption.label
          }
        }
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let { formVals } = this.state;
    console.log(formVals.selectedCity.label);
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
            value={formVals.userName}
            onChange={this.handleChange}
          />

          <Input
            id="usersPassword"
            type="password"
            autoComplete="user-password"
            name="userPassword"
            value={formVals.userPassword}
            placeholder="User Password"
            onChange={this.handleChange}
          />

          <Input
            id="userPasswordVerify"
            type="password"
            autoComplete="new-password"
            name="userPasswordVerify"
            value={formVals.userPasswordVerify}
            placeholder="User Password Verify"
            onChange={this.handleChange}
          />

          <RadioButton
            id="gender"
            options={genderVals}
            data={formVals.gender}
            // value={formVals.gender}
            handleChange={this.handleChange}
          />

          <Checkbox
            id="termsAndConditions"
            name="termsAndConditions"
            data="terms and conditions"
            checked={this.state.formVals.termsAndConditions}
            onChange={this.handleCheckboxChange}
          />

          <Checkbox
            id="rememberMe"
            name="rememberMe"
            data="remember me"
            checked={this.state.formVals.rememberMe}
            onChange={this.handleCheckboxChange}
          />

          <Select
            name="selectedCity"
            options={Cities}
            isSearchable={true}
            value={formVals.selectedCity}
            label={formVals.selectedCity}
            placeholder={"please select a city"}
            onChange={this.handleSelectChange}
          />

          <Textarea
            name="description"
            placeholder="please describe your personal intrests"
            wrap="hard"
            cols="30"
            rows="20"
            onChange={this.handleChange}
          />

          <Button value="login" />
        </form>
      </React.Fragment>
    );
  }
}
