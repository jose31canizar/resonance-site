import React, { Component } from "react";
import "./FeaturedBy.styl";

class FeaturedBy extends Component {
  render() {
    return (
      <div class="featured-by">
        <h3>{this.props.data.title}</h3>
        <img src={require("../../img/featured-by.png")} alt="featured by" />
      </div>
    );
  }
}

export default FeaturedBy;
