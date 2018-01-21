import React, { Component } from 'react'
import './ThankYou.styl'

class ThankYou extends Component {
  render() {
    const { text } = this.props
    return (
        <div className="thank-you">
          <h1>{text}</h1>
        </div>
    );
  }
}

export default ThankYou;
