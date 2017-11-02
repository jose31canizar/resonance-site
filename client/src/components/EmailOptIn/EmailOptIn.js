import React, { Component } from 'react'
import './EmailOptIn.styl'
import { Link } from 'react-router-dom'

class EmailOptIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      email: ''
    }
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleFirstName(event) {
    this.setState({firstName: event.target.value});
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.email + this.state.firstName + this.state.lastName)
    this.addMember()
    event.preventDefault()
    setTimeout(function(){window.location.href='/thankyou'} , 2000);
    // this.context.router.transitionTo('https://localhost:9001/thankyou')
    return false
  }
  addMember = () => {
    fetch('/api/addMember', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: this.state.email,
        status: 'subscribed',
        merge_fields: {
          firstName: this.state.firstName
        }
      })
    })
    .then(function(res){
      console.log(res)
    })
    .catch(function(res){
      console.log(res)
    })
  }
  handleClose(e) {
    e.stopPropagation()
  }
  render() {
    return (
      <div className="email-opt-in" onClick={this.props.closeEmailOptIn}>
        <div className="registration-block" onClick={this.handleClose}>
          <h2>Join us now.</h2>
          <h4>Sign up to grab limited exclusive access to Resonance.</h4>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="first name" type="text" value={this.state.firstName} onChange={this.handleFirstName} />
            <input placeholder="email" type="text" value={this.state.email} onChange={this.handleEmail} />
            <input type="submit" value="Sign me up!" />
          </form>
        </div>
      </div>
    );
  }
}

export default EmailOptIn;
