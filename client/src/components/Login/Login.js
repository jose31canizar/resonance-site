import React, { Component } from 'react'
import FreePassButton from '../FreePassButton/FreePassButton'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './Login.styl'
import { Link } from 'react-router-dom'
import { debounce } from 'lodash'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        warning: '',
        mask: true
    }
    // this.handleKeyPress = debounce(this.handleKeyPress.bind(this), 500);
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleMask = this.toggleMask.bind(this)
    this.authorize = this.authorize.bind(this)
  }
  comparePasswords(e) {
    if(e.target.value !== this.state.password) {
      console.log('invalid password')
      this.setState({
        warning: 'passwords do not match'
      })
    } else {
      this.setState({
        warning: ''
      })
    }
  }
  handleInput(event, type) {
    console.log(event)
    console.log(type)
    var state = {}
    state[type] = event.target.value
    this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('handling submit')
    if(this.props.type === 'signup') {
      if(this.state.email && this.state.password && this.state.firstName && this.state.lastName && this.state.phoneNumber) {
        this.authorize()
      }
    } else {
      if(this.state.email && this.state.password) {
        this.authorize()
      }
    }
    return false
  }
  authorize() {
    console.log('signing up....')
    console.log(this.state.email)
    console.log(this.state.password)
    const requestBody = this.props.type === 'login' ? {
      email: this.state.email,
      password: this.state.password 
    } :
    {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password 
    }

    fetch(`/account/${this.props.type}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        requestBody
      )
    })
    .then(res => {
      return res.json();
    })
    .then((res) => {
      // window.location = `http://resonator.life/${this.props.type}`;
      console.log('result')
      console.log(res)
      if(res.message === 'duplicate user') {
        this.setState({
          warning: 'There is a user already using this email.'
        });
      } else if(res.message === 'success') {
        this.setState({
          warning: "You've signed in!"
        });
        setTimeout(() => {
          window.location = `http://localhost:9001/beta`;
        }, 1000);
      }
    }, function(err){
      console.log(err);
    });
  }
  toggleMask() {
    this.setState((prevState, props) => {
      return {mask: !prevState.mask}
    })
  }
  render() {
    const { type } = this.props
    const Fragment = React.Fragment;
    return (
      <div className="login">
        <div className='login-header'>
          <h2>Resonance Site {type === 'login' ? 'Login' : 'Sign Up'}</h2>
          <p>{type === 'login' ? 'log in' : 'sign up'} to {type === 'login' ? 'to view the Resonance beta page' : 'to become a Resonance beta tester'}</p>
        </div>
        <form onSubmit={this.handleSubmit}>
        {type === 'login' ?
          <Fragment>
            <input placeholder="email" type="text" value={this.state.email} onChange={this.handleEmail} onKeyPress={this.handleKeyPress}/>
            <input placeholder="password" type={this.state.mask ? 'password' : 'text'} value={this.state.password} onChange={this.handlePassword} onKeyPress={this.handleKeyPress}/>
          </Fragment>
          :
          <Fragment>
            <input placeholder="first name" type="text" value={this.state.firstName} onChange={(e) => this.handleInput(e, 'firstName')} />
            <input placeholder="last name" type="text" value={this.state.lastName} onChange={(e) => this.handleInput(e, 'lastName')} />
            <input placeholder="phone number" type="text" value={this.state.phoneNumber} onChange={(e) => this.handleInput(e, 'phoneNumber')} />
            <input placeholder="email" type="text" value={this.state.email} onChange={(e) => this.handleInput(e, 'email')} />
            <input placeholder="password" type={this.state.mask ? 'password' : 'text'} value={this.state.password} onChange={(e) => this.handleInput(e, 'password')}/>
            <input placeholder="confirm password" type={this.state.mask ? 'password' : 'text'} onChange={(e) => this.comparePasswords(e)}/>
          </Fragment>
        }
            
          <p className='mask-button' onMouseDown={this.toggleMask}>toggle mask</p>
          <p>{this.state.warning}</p>
          {type === 'login' ? 
            <p className='sub-text'>Don't have an account? <Link to='signup'>Sign up!</Link></p> :
            <p className='sub-text'>Already have an account? <Link to='login'>Login!</Link></p>
          }
          <div className='submit-button' onMouseDown={this.handleSubmit}>{type === 'login' ? 'log in' : 'sign up'}</div>
        </form>
      </div>
      
    );
  }
}

export default Login;
