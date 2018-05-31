import React, { Component } from "react";
import "./SpeakerIntro.styl";

class SpeakerIntro extends Component {
  render() {
    return (
      <div
        class="speaker-intro"
        style={{
          backgroundImage: `url(${require("../../img/background.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <h1>{this.props.data.title}</h1>
        <h2>{this.props.data.subtitle}</h2>
      </div>
    );
  }
}

export default SpeakerIntro;
