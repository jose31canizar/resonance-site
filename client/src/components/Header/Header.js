import React, { Component } from "react";
import { Link } from "react-router-dom";
import FreePassButton from "../FreePassButton/FreePassButton";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Header.styl";

class Header extends Component {
  render() {
    const { buttonType } = this.props;
    const { description, offer, statement } = this.props.data;
    return (
      <section class="header">
        <div class="headline">
          <h2>{this.props.data.headline}</h2>
        </div>
        <div class="header-content">
          {/* <video autoPlay loop muted>
            <source src={require("../../img/concert.MOV")} type="video/mp4"/>
          </video> */}
          <img
            class="phone-img"
            src={require("../../img/ix-with-poster.png")}
            alt="poster"
          />
          <div class="description">
            <p>{description}</p>
            <p>{offer}</p>
            <div class="ticket">
              <Link to="beta">
                <img
                  class="ticket-img"
                  src={require("../../img/ticket.png")}
                  alt="ticket"
                />
              </Link>
            </div>
          </div>
        </div>
        <ScrollReveal id="reveal-header">
          <h2 class="ticket-text">{statement}</h2>
          <FreePassButton
            buttonType={buttonType}
            openSignUpForm={this.props.openSignUpForm}
            white
          />
        </ScrollReveal>
      </section>
    );
  }
}

export default Header;
