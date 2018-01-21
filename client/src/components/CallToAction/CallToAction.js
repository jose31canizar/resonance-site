import React, { Component } from 'react'
import FreePassButton from '../FreePassButton/FreePassButton'
import './CallToAction.styl'

class CallToAction extends Component {
  render() {
    const { buttonType } = this.props
    return (
      <div className="call-to-action" style={{backgroundImage: `url(${require('../../img/background.jpg')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h1>{this.props.data.title}</h1>
        <FreePassButton openEmailOptIn={this.props.openEmailOptIn} buttonType={buttonType}/>
      </div>
    );
  }
}

export default CallToAction;
