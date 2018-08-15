import React, { Component } from "react";
import "./FeaturedBy.styl";

class FeaturedBy extends Component {
  render() {
    return (
      <section class="featured-by">
        <h3>{this.props.data.title}</h3>
        <img src={require("../../img/featured-by.png")} alt="featured by" />
      </section>
    );
  }
}

export default FeaturedBy;
