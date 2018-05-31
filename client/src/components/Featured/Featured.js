import React, { Component } from "react";
import FeaturedData from "../../data/featured.json";

import "./Featured.styl";

// const concat = (x, y) => x.concat(y);

// const flatMap = (f, xs) => xs.map(f).reduce(concat, []);

export default class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover_states: FeaturedData.reduce(function(acc, cur, i) {
        acc[cur.id] = cur.links.map(() => false);
        return acc;
      }, {})
    };
    this.showHoverTitle = this.showHoverTitle.bind(this);
    this.hideHoverTitle = this.hideHoverTitle.bind(this);
  }
  showHoverTitle(id, i) {
    console.log(id);
    console.log(i);
    console.log(this.state.hover_states);
    this.setState((prevState, props) => {
      var newState = prevState.hover_states;
      newState[id] = prevState.hover_states[id].map(flag => !flag);
      return {
        hover_states: newState
      };
    });
  }
  hideHoverTitle(id, i) {
    console.log(id);
    console.log(i);
    console.log(this.state.hover_states);
    this.setState((prevState, props) => {
      var newState = prevState.hover_states;
      newState[id] = prevState.hover_states[id].map(flag => !flag);
      return {
        hover_states: newState
      };
    });
  }
  render() {
    const { hover_states } = this.state;
    return (
      <div class="featured">
        {FeaturedData.map((feature, i) => (
          <div class="feature">
            {feature.links.map((link, j) => (
              <a
                href={link.link}
                class="feature-image"
                onMouseOver={() => this.showHoverTitle(feature.id, j)}
                onMouseOut={() => this.hideHoverTitle(feature.id, j)}
              >
                <h2
                  class={`hover-title ${
                    hover_states[feature.id][j] ? "show" : "hide"
                  }`}
                >
                  {link.name}
                </h2>
                <img src={feature.image} alt={feature.image} />
              </a>
            ))}

            <h2>{feature.title}</h2>
            <div class="feature-info">
              <time>{feature.date}</time>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
