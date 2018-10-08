import React, { Component } from "react";

class Banner extends Component {
  state = {
    value: 0,
    direction: "right",
    count: 0
  };
  tick = () => {
    this.setState(({ value, direction, count }, props) => ({
      value: direction === "left" ? value - 0.1 : value + 0.1,
      direction: value < -40 ? "right" : value > 40 ? "left" : direction,
      count: count + 1
    }));
    let x = this.easeInoutCubic(this.state.count, 0, 10.1, 10);
    console.log(x, count);
    // setTimeout(this.tick, x);
  };
  componentDidMount() {
    setTimeout(this.tick, 1);
    // console.log(this.easeInoutCubic(this.state.count, 0, 0.1, 1000));
  }
  easeInoutCubic(t, b, c, d) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  componentWillUnmount() {
    clearInterval(this.loop);
  }
  render() {
    const { value, direction } = this.state;

    return (
      <svg className="banner-title" viewBox="0 0 200 200">
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
        <text text-anchor="middle" alignmentBaseline="middle" y="50%" x="50%">
          <tspan dy="0" dx={`${2}rem`}>
            CURATED MUSIC
          </tspan>
          <tspan dy="0.77em" dx={`${value - 22}rem`}>
            RIGHT AT YOUR FINGERTIPS
          </tspan>
        </text>
      </svg>
    );
  }
}

export default Banner;
