import React, { Component } from 'react'
import FreePassButton from '../FreePassButton/FreePassButton'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './Header.styl'

class Header extends Component {
  render() {
    const { buttonType } = this.props
    const { description, offer, statement } = this.props.data
    return (
      <div className="header">
        <div className='headline'>
          <h2>{this.props.data.headline}</h2>
        </div>
        <div className='header-content'>
          <video autoPlay loop muted>
            <source src={require("../../img/concert.MOV")} type="video/mp4"/>
          </video>
          <div className='description'>
            <p>{ description }</p>
            <p>{ offer }</p>
            <div className='ticket'>
              <img src={require('../../img/ticket.png')}/>
            </div>
          </div>
        </div>
        <ScrollReveal id='reveal-header'>
          <h2 className='ticket-text'>{ statement }</h2>
          <FreePassButton buttonType={buttonType} openEmailOptIn={this.props.openEmailOptIn} white/>
        </ScrollReveal>
      </div>
    );
  }
}

export default Header;
