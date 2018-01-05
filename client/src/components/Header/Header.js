import React, { Component } from 'react'
import FreePassButton from '../FreePassButton/FreePassButton'
import './Header.styl'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 720
    }

  }
  componentDidMount() {
    const w = Math.max(document.body.clientWidth, window.innerWidth || 0)
    if (w < 700) {
      this.setState({
        width: 280
      })
    } else if(w < 1200) {
      this.setState({
        width: 600
      })
    } else {
      this.setState({
        width: 720
      })
    }
    window.addEventListener('resize', () => {
      const w = Math.max(document.body.clientWidth, window.innerWidth || 0)
      //iphone 5 - 6
      if (w < 700) {
        this.setState({
          width: 280
        })
      } else if(w < 1200) {
        this.setState({
          width: 600
        })
      } else {
        this.setState({
          width: 720
        })
      }
    })
  }
  render() {
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
            <p>{this.props.data.description}</p>
            <p>{this.props.data.offer}</p>
            <div className='ticket'>
              <img src={require('../../img/ticket.png')}/>
              <p><b>Grab your VIP access to the </b><span>Resonance Release</span></p>
            </div>
          </div>
        </div>

        <FreePassButton openEmailOptIn={this.props.openEmailOptIn} white/>
      </div>
    );
  }
}

export default Header;
