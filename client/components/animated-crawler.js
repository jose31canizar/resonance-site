import React, { Component } from "react";

export default class AnimatedCrawler extends Component {
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
    // console.log(x, count);
    // setTimeout(this.tick, x);
  };
  componentDidMount() {
    setTimeout(this.tick, 1);
  }
  componentWillUnmount() {
    clearInterval(this.loop);
  }
  easeInoutCubic(t, b, c, d) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  render() {
    <div />;
  }
}
