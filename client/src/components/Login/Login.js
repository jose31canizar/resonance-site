import React, { Component } from "react";
import FreePassButton from "../FreePassButton/FreePassButton";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Login.styl";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

import { connect } from "react-redux";

import history from "../../history";

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    warning: state.warning
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) =>
      dispatch({ type: "LOGIN_USER", email: email, password: password }),
    signup: (email, password, firstName, lastName, username) =>
      dispatch({
        type: "SIGNUP_USER",
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        username: username
      }),
    logout: () => dispatch({ type: "LOGOUT_USER" })
  };
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      warning: "",
      mask: true,
      navigate: this.props.type
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleMask = this.toggleMask.bind(this);
    this.authorize = this.authorize.bind(this);
  }
  comparePasswords(e) {
    if (e.target.value !== this.state.password) {
      this.setState({
        warning: "passwords do not match"
      });
    } else {
      this.setState({
        warning: ""
      });
    }
  }
  handleInput(event, type) {
    var state = {};
    state[type] = event.target.value.trim();
    this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.props.type === "signup") {
      if (
        this.state.email &&
        this.state.password &&
        this.state.firstName &&
        this.state.lastName &&
        this.state.username
      ) {
        this.authorize();
      }
    } else {
      if (this.state.email && this.state.password) {
        this.authorize();
      }
    }
    return false;
  }
  authorize() {
    if (this.props.type === "login") {
      this.props.login(this.state.email, this.state.password);
    } else {
      this.props.signup(
        this.state.email,
        this.state.password,
        this.state.firstName,
        this.state.lastName,
        this.state.username
      );
    }
  }
  toggleMask() {
    this.setState((prevState, props) => {
      return { mask: !prevState.mask };
    });
  }
  render() {
    const { type } = this.props;
    const Fragment = React.Fragment;
    return (
      <div className="login">
        <div className="login-header">
          <h2>Resonance Site {type === "login" ? "Login" : "Sign Up"}</h2>
          <p>
            {type === "login" ? "log in" : "sign up"} to{" "}
            {type === "login"
              ? "to view the Resonance beta page"
              : "to become a Resonance beta tester"}
          </p>
        </div>
        <form onSubmit={this.handleSubmit} method="post">
          {type === "login" ? (
            <Fragment>
              <input
                placeholder="email"
                type="text"
                value={this.state.email}
                onChange={e => this.handleInput(e, "email")}
              />
              <input
                placeholder="password"
                type={this.state.mask ? "password" : "text"}
                value={this.state.password}
                onChange={e => this.handleInput(e, "password")}
              />
            </Fragment>
          ) : (
            <Fragment>
              <input
                placeholder="first name"
                type="text"
                value={this.state.firstName}
                onChange={e => this.handleInput(e, "firstName")}
              />
              <input
                placeholder="last name"
                type="text"
                value={this.state.lastName}
                onChange={e => this.handleInput(e, "lastName")}
              />
              <input
                placeholder="username"
                type="text"
                value={this.state.username}
                onChange={e => this.handleInput(e, "username")}
              />
              <input
                placeholder="email"
                type="text"
                value={this.state.email}
                onChange={e => this.handleInput(e, "email")}
              />
              <input
                placeholder="password"
                type={this.state.mask ? "password" : "text"}
                value={this.state.password}
                onChange={e => this.handleInput(e, "password")}
              />
              <input
                placeholder="confirm password"
                type={this.state.mask ? "password" : "text"}
                onChange={e => this.comparePasswords(e)}
              />
            </Fragment>
          )}

          <p className="mask-button" onMouseDown={this.toggleMask}>
            toggle mask
          </p>
          <p>{this.props.warning ? this.props.warning : this.state.warning}</p>
          {type === "login" ? (
            <p className="sub-text">
              Don't have an account? <Link to="signup">Sign up!</Link>
            </p>
          ) : (
            <p className="sub-text">
              Already have an account? <Link to="login">Login!</Link>
            </p>
          )}
          <div className="submit-button" onMouseDown={this.handleSubmit}>
            {type === "login" ? "log in" : "sign up"}
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
