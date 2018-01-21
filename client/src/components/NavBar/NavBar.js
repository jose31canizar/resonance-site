import React, { Component } from 'react'
import data from '../../data/navbar.json'
import { Link } from 'react-router-dom'
import SmoothScroll from '../SmoothScroll/SmoothScroll'
import './NavBar.styl'
import FreePassButton from '../FreePassButton/FreePassButton'
import Parallax from '../Parallax/Parallax'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "Home",
      distance: 0,
      flip: false,
      currentScrollTop: document.body.scrollTop
    }
    this.setSelected = this.setSelected.bind(this)
    this.flip = this.flip.bind(this)
  }
  componentWillMount() {
    document.addEventListener('scroll', this.flip)
  }
  setSelected(title) {
    this.setState({
      selected: title
    })
  }
  flip() {
    this.setState((prevState, props) => {
      const newDistance = document.body.scrollTop
      const oldDistance = prevState.currentScrollTop
      if(oldDistance > newDistance) {
        return {
          distance: oldDistance + 1,
          flip: false
        }
      } else if(oldDistance === newDistance) {
        return {
          distance: oldDistance
        }
      } else {
        return {
          distance: oldDistance - 1,
          flip: false
        }
      }

    })
    this.setState({
      currentScrollTop: document.body.scrollTop
    })
  }
  render() {
    console.log(this.props)
    const { slogan, statement } = this.props.data
    return (
      <div className='nav-bar-wrapper'>
        <Parallax className='nav-bar-background' src={require('../../img/background_2.jpg')} />
        <div className={'nav-bar' + (this.state.flip ? ' flip' : '')}>
          <div className='nav-bar-header'>
            <img className='icon' src={require('../../img/resonance_logo_icon.png')} />
            <h1>resonance</h1>
          </div>
          <h3>{slogan}</h3>
          <p><Link to='beta'>{statement}</Link></p>
          <div className='account-actions'>
            <Link to='login'>Login</Link>
            <Link to='signup'>Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
