import React, { Component } from 'react'
import data from '../../data/navbar.json'
import { Link } from 'react-router-dom'
import SmoothScroll from '../SmoothScroll/SmoothScroll'
import './NavBar.styl'
import FreePassButton from '../FreePassButton/FreePassButton'

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
    return (
      <div className='nav-bar-wrapper'>
        <div className={'nav-bar' + (this.state.flip ? ' flip' : '')}>
          <div className='nav-bar-header'>
            <img className='icon' src={require('../../img/icon.png')} />
            <img className='title' src={require('../../img/logo-foodbodylove-v5.png')} />
          </div>
          <FreePassButton openEmailOptIn={this.props.openEmailOptIn}/>
        </div>
      </div>
    );
  }
}

export default NavBar;
