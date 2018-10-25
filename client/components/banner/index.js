import React, { Component } from "react";
import "./index.styl";

export default class Banner extends Component {
  state = { mobile: false };
  handleResize = () => {
    this.setState({ width: document.body.clientWidth }, () => {
      if (this.state.width < 640) {
        this.setState({ mobile: true });
      } else {
        this.setState({ mobile: false });
      }
    });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
  render() {
    const { mobile } = this.state;
    console.log(mobile);
    return (
      <svg
        className={`banner-title ${mobile ? "mobile" : ""}`}
        viewBox="0 0 200 200"
      >
        <defs>
          <pattern
            id="banner-pattern"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <image
              x="0"
              y="0"
              href="/static/phone-background-1.jpg"
              width="100%"
            />
          </pattern>
        </defs>
        <text
          class="title-text"
          text-anchor="middle"
          alignmentBaseline="middle"
          y="50%"
          x="50%"
        >
          CURATED MUSIC
        </text>
        <text
          class="title-text"
          text-anchor="middle"
          alignmentBaseline="middle"
          y="62%"
          x="50%"
        >
          RIGHT AT YOUR FINGERTIPS
        </text>
      </svg>
    );
  }
}
