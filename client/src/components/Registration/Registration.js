import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Info from "../Info/Info";
import SpeakerIntro from "../SpeakerIntro/SpeakerIntro";
import Artists from "../Artists/Artists";
import FeaturedBy from "../FeaturedBy/FeaturedBy";
import CallToAction from "../CallToAction/CallToAction";
import Benefits from "../Benefits/Benefits";
import MainCallToAction from "../MainCallToAction/MainCallToAction";

import HeaderData from "../../data/header.json";
import NavBarData from "../../data/navbar.json";
import InfoData from "../../data/info.json";
import SpeakerIntroData from "../../data/speaker-intro.json";
import ArtistsData from "../../data/artists.json";
import CallToActionData from "../../data/call-to-action.json";
import BenefitsData from "../../data/benefits.json";
import MainCallToActionData from "../../data/main-call-to-action.json";
import SignUpFormData from "../../data/sign-up-form.json";

import SignUpForm from "../SignUpForm/SignUpForm";
import FreePassButton from "../FreePassButton/FreePassButton";

import "./Registration.styl";

export default class Registration extends Component {
  render() {
    return (
      <div className="registration">
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
