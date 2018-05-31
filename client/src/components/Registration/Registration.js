import React, { Component } from "react";
import Header from "../Header/Header";
import Info from "../Info/Info";
import CallToAction from "../CallToAction/CallToAction";
import Benefits from "../Benefits/Benefits";

import HeaderData from "../../data/header.json";
import InfoData from "../../data/info.json";
import CallToActionData from "../../data/call-to-action.json";
import BenefitsData from "../../data/benefits.json";

import "./Registration.styl";

export default class Registration extends Component {
  render() {
    return (
      <div class="registration">
        <Header
          data={HeaderData[0]}
          openSignUpForm={this.props.openSignUpForm}
          buttonType="addMember"
        />
        <Info data={InfoData[0]} openSignUpForm={this.props.openSignUpForm} />
        <Benefits data={BenefitsData[0]} />
        <CallToAction
          data={CallToActionData[0]}
          openSignUpForm={this.props.openSignUpForm}
        />
      </div>
    );
  }
}
