import React, { Component } from "react";
import "./SignUpForm.styl";
import { Link } from "react-router-dom";
import history from "../../history";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      warning: "",
      yOffset: 0,
      navigate: this.props.type === "addMember" ? "" : "/beta"
    };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addMember = this.addMember.bind(this);
  }
  handleName(event) {
    this.setState({ name: event.target.value.trim() });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value.trim() });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.email && this.state.name) {
      this.setState(
        {
          navigate:
            this.props.type === "addMember" ? "/thankyou" : "/thankyoubeta"
        },
        () => {
          this.addMember();
        }
      );
    } else if (this.state.email) {
      this.setState({
        warning: "Please enter your first name."
      });
    } else if (this.state.name) {
      this.setState({
        warning: "Please enter your email."
      });
    } else {
      this.setState({
        warning: "Please enter your info."
      });
    }
    return false;
  }
  handleKeyPress = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (this.state.email && this.state.name) {
        const type =
          this.props.type === "addMember" ? "/thankyou" : "/thankyoubeta";
        this.setState({ navigate: type }, () => {
          this.addMember();
        });
      } else if (this.state.email) {
        this.setState({
          warning: "Please enter your first name."
        });
      } else if (this.state.name) {
        this.setState({
          warning: "Please enter your email."
        });
      } else {
        this.setState({
          warning: "Please enter your info."
        });
      }
    }
  };
  addMember() {
    fetch(`/api/${this.props.type}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email_address: this.state.email,
        status: "subscribed",
        merge_fields: {
          name: this.state.name
        }
      })
    })
      .then(res => {
        const type =
          this.props.type === "addMember" ? "/thankyou" : "/thankyoubeta";
        // window.location.replace(`http://resonator.life${type}`); //only needed for case of keypress
        // window.location = `http://resonator.life${type}`;
        // window.location = `http://resonator.life${type}`;
        // this.props.closeSignUpForm();
        history.push(type);
      })
      .catch(function(res) {
        console.log(res);
      });
  }
  handleClose(e) {
    e.stopPropagation();
  }
  componentWillUnmount() {
    document.body.style.position = "absolute";
    document.body.style.top = "0px";
    window.scrollTo(0, this.state.yOffset);
  }
  componentDidMount() {
    var modal = document.getElementsByClassName("sign-up-form");
    var body = document.body;
    var y = window.pageYOffset;
    this.setState({ yOffset: y });
    modal[0].style.top = y + "px";
    body.style.top = "-" + y.toString() + "px";

    document.body.style.position = "fixed";
  }
  render() {
    const { title, statement, buttonText } = this.props.data;
    return (
      <div class="sign-up-form" onClick={this.props.closeSignUpForm}>
        <div class="registration-block" onClick={this.handleClose}>
          <label>{title}</label>
          <label>{statement}</label>
          <form onSubmit={this.handleSubmit} method="post">
            <input
              placeholder="first name"
              type="text"
              value={this.state.name}
              onChange={this.handleName}
              onKeyPress={this.handleKeyPress}
            />
            <input
              placeholder="email"
              type="text"
              value={this.state.email}
              onChange={this.handleEmail}
              onKeyPress={this.handleKeyPress}
            />
            {this.state.warning ? (
              <p class="warning">{this.state.warning}</p>
            ) : (
              <p>&nbsp;</p>
            )}
            <div
              class="submit-button-container"
              onMouseDown={this.handleSubmit}
            >
              <Link to={this.state.navigate} class="submit-button">
                <p class="shown-text">{buttonText}</p>
                <p class="hidden-text">{buttonText}</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
