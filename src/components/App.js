import React, { Component } from "react";
import getUsersApi from "../api/getUsersApi";
import getSingleUserApi from "../api/getSingleUserApi";
export default class componentName extends Component {
  componentDidMount = () => {
    this.getUsers();
    this.getSingleUser();
  };
  getUsers = async () => {
    await getUsersApi().then((resp) => {
      console.log(resp);
    });
  };

  getSingleUser = async () => {
    const id = "wdrtwer456567";

    const newUser = {
      firstName: "James",
      lastName: "White",
      userId: "dfgdf34563564sd",
      email: "james@gmail.com",
      address: {
        streetAddress: "st james avenue 1",
        city: "London",
        region: "London",
        postalCode: "456112"
      }
    };
    await getSingleUserApi(id, newUser).then((resp) => {
      console.log(resp);
    });
  };
  render() {
    return <p>starter template</p>;
  }
}
