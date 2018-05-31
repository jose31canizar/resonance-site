import React, { Component } from "react";
import CallToAction from "../CallToAction/CallToAction";
import Header from "../Header/Header";

import HeaderData from "../../data/beta/header.json";
import CallToActionData from "../../data/beta/call-to-action.json";

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
      <div class="beta">
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
