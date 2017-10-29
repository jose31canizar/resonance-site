import React, { Component } from 'react'
import './FeaturedBy.styl'

class FeaturedBy extends Component {
  render() {
    return (
      <div className="featured-by">
        <h3>{this.props.data.title}</h3>
        <img src={require('../../img/featured-by.png')} />
      </div>
    );
  }
}

export default FeaturedBy;
