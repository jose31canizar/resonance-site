import React, { Component } from 'react'
import FreePassButton from '../FreePassButton/FreePassButton'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './Login.styl'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        warning: '',
        navigate: '',
        mask: true
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleMask = this.toggleMask.bind(this)
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault()
    return false
  }
  authorize = () => {
    console.log('signing up....')
    console.log(this.state.email)
    console.log(this.state.password)
    fetch(`/api/${this.props.type}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password 
      })
    })
    .then(function(res){
      this.setState({
          navigate: '/beta'
      })
      console.log(res)
    })
    .catch(function(res){
      console.log(res)
    })
  }
  handleKeyPress = (event) => {
    if(this.state.email && this.state.password) {
        this.authorize()
    }
  }
  toggleMask() {
    this.setState((prevState, props) => {
      return {mask: !prevState.mask}
    })
  }
  render() {
    const { type } = this.props
    return (
      <div className="login">
        <h2>Resonance Site {type === 'login' ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="email" type="text" value={this.state.email} onChange={this.handleEmail} onKeyPress={this.handleKeyPress}/>
          <input placeholder="password" type={this.state.mask ? 'password' : 'text'} value={this.state.password} onChange={this.handlePassword} onKeyPress={this.handleKeyPress}/>
          <p className='mask-button' onMouseDown={this.toggleMask}>toggle mask</p>
          <div className='submit-button-container' onMouseDown={this.handleSubmit}>
              <Link to={this.state.navigate} className='submit-button'>{type === 'login' ? 'log in' : 'sign up'}</Link>
          </div>
        </form>
      </div>
      
    );
  }
}

export default Login;
