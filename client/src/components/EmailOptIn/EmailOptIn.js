import React, { Component } from 'react'
import './EmailOptIn.styl'
import { Link } from 'react-router-dom'

class EmailOptIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleName(event) {
    this.setState({name: event.target.value});
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.email + this.state.name)
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
          name: this.state.name
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
          <h4>Subscribe to grab limited exclusive access to Resonance.</h4>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="first name" type="text" value={this.state.name} onChange={this.handleName} />
            <input placeholder="email" type="text" value={this.state.email} onChange={this.handleEmail} />
            <input type="submit" value="Sign me up!" />
          </form>
        </div>
      </div>
    );
  }
}

export default EmailOptIn;
