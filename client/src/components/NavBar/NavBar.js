import React, { Component } from 'react'
import data from '../../data/navbar.json'
import { Link } from 'react-router-dom'
import SmoothScroll from '../SmoothScroll/SmoothScroll'
import './NavBar.styl'
import FreePassButton from '../FreePassButton/FreePassButton'
import Parallax from '../Parallax/Parallax'

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch({type: 'LOGIN_USER'}),
    onLogout: () => dispatch({type: 'LOGOUT_USER'})
  };
};

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
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    // document.addEventListener('scroll', this.flip)
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
  logout() {
    fetch(`/account/logout`)
    .then(res => {
      return res.json();
    })
    .then((res) => {
      console.log('result')
      console.log(res)
      if(res.message === 'successful logout') {
        this.props.onLogout()
      } 
    }, function(err){
      console.log(err);
    });
  }
  render() {
    const { slogan, statement } = this.props.data
    return (
      <div className='nav-bar-wrapper'>
        <Parallax className='nav-bar-background' src={require('../../img/background_2.jpg')} />
        <div className={'nav-bar' + (this.state.flip ? ' flip' : '')}>
          <div className='nav-bar-header'>
            <Link className='icon-container' to='/'>
              <h1>resonance</h1>
              <img className='icon' src={require('../../img/resonance_logo_icon.png')} />
            </Link>
          </div>
          <h3>{slogan}</h3>
          <p className='statement'><Link to='beta'>{statement}</Link></p>
          {
            this.props.loggedIn ? 
            <div className='account-actions'>
            <p className='logout-button' onMouseDown={this.logout}>logout</p>
          </div>
            :
            <div className='account-actions'>
            <Link to='login'>Login</Link>
            <Link to='signup'>Sign up</Link>
          </div>
          }
          
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
