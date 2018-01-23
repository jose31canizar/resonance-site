import React, { Component } from 'react'
import './EmailOptIn.styl'
import { Link } from 'react-router-dom'

class EmailOptIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      warning: '',
      yOffset: 0,
      navigate: this.props.type === 'addMember' ? '' : '/beta'
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
    event.preventDefault()
    if(this.state.email && this.state.name) {
      this.setState({ navigate: this.props.type === 'addMember' ? '/thankyou' : '/thankyoubeta' }, () => {
        this.addMember()
      })
    } else if(this.state.email) {
      this.setState({
        warning: "Please enter your first name."
      })
    } else if (this.state.name) {
      this.setState({
        warning: "Please enter your email."
      })
    } else {
      this.setState({
        warning: "Please enter your info."
      })
    }
    return false
  }
  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      event.preventDefault()
      if(this.state.email && this.state.name) {
        const type = this.props.type === 'addMember' ? '/thankyou' : '/thankyoubeta'
        this.setState({ navigate: type }, () => {
          this.addMember()
        })
      } else if(this.state.email) {
        this.setState({
          warning: "Please enter your first name."
        })
      } else if (this.state.name) {
        this.setState({
          warning: "Please enter your email."
        })
      } else {
        this.setState({
          warning: "Please enter your info."
        })
      }
    }
  }
  addMember = () => {
    console.log('adding member')
    fetch(`/api/${this.props.type}`, {
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
      const type = this.props.type === 'addMember' ? '/thankyou' : '/thankyoubeta'
      // window.location.replace(`http://resonator.life${type}`); //only needed for case of keypress
      // window.location = `http://resonator.life${type}`;
      window.location = `http://resonator.life${type}`;
    })
    .catch(function(res){
      console.log(res)
    })
  }
  handleClose(e) {
    e.stopPropagation()
  }
  componentWillUnmount() {
    document.body.style.position = 'absolute';
    document.body.style.top = '0px';
    window.scrollTo(0, this.state.yOffset);
  }
  componentDidMount() {
    var modal = document.getElementsByClassName('email-opt-in');
    var body = document.body;
    var y = window.pageYOffset;
    this.setState({yOffset: y});
    modal[0].style.top = y + 'px';
    body.style.top = '-' + y.toString() + 'px';

    document.body.style.position = 'fixed';
  }
  render() {
    const { title, statement, buttonText } = this.props.data
    return (
      <div className="email-opt-in" onClick={this.props.closeEmailOptIn}>
        <div className="registration-block" onClick={this.handleClose}>
          <h2>{title}</h2>
          <h3>{statement}</h3>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="first name" type="text" value={this.state.name} onChange={this.handleName} onKeyPress={this.handleKeyPress}/>
            <input placeholder="email" type="text" value={this.state.email} onChange={this.handleEmail} onKeyPress={this.handleKeyPress}/>
            {this.state.warning ? <p className='warning'>{this.state.warning}</p> : <p>&nbsp;</p>}
            <div className='submit-button-container' onMouseDown={this.handleSubmit}>
              <Link to={this.state.navigate} className='submit-button'>{buttonText}</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EmailOptIn;
