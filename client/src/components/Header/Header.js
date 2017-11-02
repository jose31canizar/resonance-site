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
            <div className="wistia_responsive_padding" style={{position:'relative', width: '55%', marginLeft: '5%'}}>
            <div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'relative',top:'0',width:'100%', display: 'flex', justifyContent: 'center'}}>
            <iframe src="http://www.youtube.com/watch?v=wsrPWMeYPxY&list=RDwsrPWMeYPxY" title="Wistia video player" allowTransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen width={this.state.width} height={this.state.width*0.5625}></iframe>
            </div>
            </div>
          <div className='description'>
            <p>{this.props.data.description}</p>
            <p>{this.props.data.offer}</p>
            <div className='ticket'>
              <img src={require('../../img/ticket.png')}/>
              <p><b>Grab your VIP access to the </b><span>Resonance Release</span></p>
            </div>
          </div>
        </div>

        <FreePassButton openEmailOptIn={this.props.openEmailOptIn}/>
      </div>
    );
  }
}

export default Header;
