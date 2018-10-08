import React, { Component } from "react";

export default class Gamification extends Component {
  render() {
    return (
      <div className="section">
        <img
          className="banner-image"
          src="/static/resonance-phone-outline.svg"
        />
        <h2>Gamification</h2>
        <p>
          Resonance is a simple game. The only rule is: The more likes and
          reposts on your flowstream, the higher your rank.
        </p>
      </div>
    );
  }
}
