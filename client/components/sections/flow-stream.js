import React, { Component } from "react";

export default class FlowStream extends Component {
  render() {
    return (
      <div className={`section ${this.props.className}`}>
        <img
          className="banner-image"
          src="/static/resonance-phone-outline.svg"
        />
        <h2>Flow Stream</h2>
        <p>
          The flow stream is a new concept. We've wholly rejected the metaphor
          of a 'feed'. It's a survivalist analogy. The notion minimizes humans
          to animalistic behavior.
        </p>
      </div>
    );
  }
}
