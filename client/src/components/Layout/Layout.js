import React, { Component } from "react";

import NavBar from "../NavBar/NavBar";
import SignUpForm from "../SignUpForm/SignUpForm";

import SignUpFormData from "../../data/sign-up-form.json";
import NavBarData from "../../data/navbar.json";

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.signUpForm ? (
          <SignUpForm
            type="addMember"
            closeSignUpForm={this.props.closeSignUpForm}
            data={SignUpFormData[0]}
          />
        ) : (
          ""
        )}
        <NavBar
          data={NavBarData[0]}
          openSignUpForm={this.props.openSignUpForm}
          width={this.props.width}
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
        />
        {this.props.children}
      </div>
    );
  }
}
