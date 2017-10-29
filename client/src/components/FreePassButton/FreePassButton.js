import React, { Component } from 'react'
import './FreePassButton.styl'

class FreePassButton extends Component {
  render() {
    return (
      <div className="free-pass-button" onMouseDown={this.props.openEmailOptIn}>
        <h2 className='free-pass'>GET FREE PASS NOW!</h2>
      </div>
    );
  }
}

export default FreePassButton;
