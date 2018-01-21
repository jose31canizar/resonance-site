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
        navigate: ''
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handleSubmit() {

  }
  handleClose() {

  }
  handleKeyPress() {

  }
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="email" type="text" value={this.state.email} onChange={this.handleEmail} onKeyPress={this.handleKeyPress}/>
          <input placeholder="password" type="password" value={this.state.password} onChange={this.handlePassword} onKeyPress={this.handleKeyPress}/>
          <div className='submit-button-container' onMouseDown={this.handleSubmit}>
              <Link to={this.state.navigate} className='submit-button'>log in</Link>
          </div>
        </form>
      </div>
      
    );
  }
}

export default Login;
