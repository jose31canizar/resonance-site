import React, { Component } from "react";
import CallToAction from "../CallToAction/CallToAction";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import SignUpForm from "../SignUpForm/SignUpForm";
import FreePassButton from "../FreePassButton/FreePassButton";

import HeaderData from "../../data/beta/header.json";
import NavBarData from "../../data/navbar.json";
import CallToActionData from "../../data/beta/call-to-action.json";
import SignUpFormData from "../../data/beta/sign-up-form.json";

import "./Beta.styl";

class Beta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpForm: false
    };
  }
  render() {
    return (
      <div className="beta">
        <Header
          data={HeaderData[0]}
          openSignUpForm={this.props.openSignUpForm}
          buttonType="beta"
        />
        <CallToAction
          data={CallToActionData[0]}
          openSignUpForm={this.props.openSignUpForm}
          buttonType="beta"
        />
      </div>
    );
  }
}

export default Beta;
