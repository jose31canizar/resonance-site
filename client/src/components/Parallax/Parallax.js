import React, { Component } from "react";
import "./Parallax.styl";

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: window.pageYOffset
    };
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    document.addEventListener("scroll", this.update);
  }
  update() {
    this.setState((prevState, props) => {
      return { distance: window.pageYOffset };
    });
  }
  render() {
    let src = this.props.src;

    let styles;
    if (src) {
      styles = {
        background: "url(" + src + ")",
        backgroundPosition: "50% " + this.props.yPosition + "%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transform: "translate3d(0px, " + 0.3 * this.state.distance + "px, 0px)"
      };
    } else {
      styles = {
        background: "white"
      };
    }
    return (
      <div class={"parallax " + this.props.class} style={styles}>
        {/* <video autoPlay loop muted>
          <source src={require("../../img/concert.MOV")} type="video/mp4" />
        </video> */}
      </div>
    );
  }
}

export default Parallax;
