import React, { Component } from 'react'
import './FreePassButton.styl'

class FreePassButton extends Component {
  render() {
    const { buttonType } = this.props
    const type = this.props.white ? 'free-pass-button-white' : 'free-pass-button'
    return (
      <div className={type} onMouseDown={this.props.openEmailOptIn}>
        <h2 className={`free-pass`}>{buttonType === 'beta' ? 'Sign up!' : 'Subscribe!'}</h2>
      </div>
    );
  }
}

export default FreePassButton;
