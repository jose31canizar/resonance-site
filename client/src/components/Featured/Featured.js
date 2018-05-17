import React, { Component } from "react";

import NavBar from "../NavBar/NavBar";
import SignUpForm from "../SignUpForm/SignUpForm";

import SignUpFormData from "../../data/sign-up-form.json";
import NavBarData from "../../data/navbar.json";
import FeaturedData from "../../data/featured.json";

import "./Featured.styl";

export default class Featured extends Component {
  constructor(props) {
    super(props);
    console.log(FeaturedData.flatMap(feature => feature.links));
    console.log(Object.values(FeaturedData).flatMap(feature => feature.links));
    this.state = {
      hover_states: [false, false]
    };
    this.showHoverTitle = this.showHoverTitle.bind(this);
    this.hideHoverTitle = this.hideHoverTitle.bind(this);
  }
  showHoverTitle(i) {
    console.log(i);
    this.setState((prevState, props) => ({
      hover_states: prevState.hover_states[i].map(
        (hoverState, i) => (hoverState === i ? true : false)
      )
    }));
  }
  hideHoverTitle(i) {
    this.setState((prevState, props) => ({
      hover_states: prevState.hover_states[i].map(
        (hoverState, i) => (hoverState === i ? false : true)
      )
    }));
  }
  render() {
    const { hover_states } = this.state;
    return (
      <div className="featured">
        {FeaturedData.map((feature, i) => (
          <div className="feature">
            {feature.links.map((link, i) => (
              <a
                href={link.link}
                className="feature-image"
                onMouseOver={() => this.showHoverTitle(i)}
                onMouseOut={() => this.hideHoverTitle(i)}
              >
                <h2
                  className={`hover-title ${hover_states[i] ? "show" : "hide"}`}
                >
                  {link.name}
                </h2>
                <img src={require(`../../img/${feature.image}`)} />
              </a>
            ))}

            <h2>{feature.title}</h2>
            <div className="feature-info">
              <time>{feature.date}</time>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
