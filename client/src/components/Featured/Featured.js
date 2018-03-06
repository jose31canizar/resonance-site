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
    this.state = {
      hover: false
    };
    this.showHoverTitle = this.showHoverTitle.bind(this);
    this.hideHoverTitle = this.hideHoverTitle.bind(this);
  }
  showHoverTitle() {
    this.setState({ hover: true });
  }
  hideHoverTitle() {
    this.setState({ hover: false });
  }
  render() {
    const { hover } = this.state;
    return (
      <div className="featured">
        {FeaturedData.map((feature, i) => (
          <div className="feature">
            {feature.links.map((link, i) => (
              <a
                href={link.link}
                className="feature-image"
                onMouseOver={this.showHoverTitle}
                onMouseOut={this.hideHoverTitle}
              >
                <h2 className={`hover-title ${hover ? "show" : "hide"}`}>
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
