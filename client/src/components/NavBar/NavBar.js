import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.styl";
import Parallax from "../Parallax/Parallax";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    firstName: state.firstName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: firstName => dispatch({ type: "LOGIN_USER", firstName: firstName }),
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

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Home",
      distance: 0,
      flip: false,
      currentScrollTop: document.body.scrollTop
    };
    this.setSelected = this.setSelected.bind(this);
    this.flip = this.flip.bind(this);
  }
  componentDidMount() {
    // document.addEventListener("scroll", this.flip);
    document.addEventListener("scroll", () =>
      this.setState({ distance: window.pageYOffset })
    );
  }
  setSelected(title) {
    this.setState({
      selected: title
    });
  }
  flip() {
    this.setState((prevState, props) => {
      const newDistance = document.body.scrollTop;
      const oldDistance = prevState.currentScrollTop;
      if (oldDistance > newDistance) {
        return {
          distance: oldDistance + 1,
          flip: false
        };
      } else if (oldDistance === newDistance) {
        return {
          distance: oldDistance
        };
      } else {
        return {
          distance: oldDistance - 1,
          flip: false
        };
      }
    });
    this.setState({
      currentScrollTop: document.body.scrollTop
    });
  }
  render() {
    const { statement, navItems } = this.props.data;
    return (
      <div class="nav-bar-wrapper">
        <Parallax
          class="nav-bar-background"
          src={require("../../img/waves-2.jpg")}
        />
        <div
          class={`nav-bar${this.state.flip ? " flip" : ""}${
            this.state.distance > 200 ? " black-text" : ""
          }`}
        >
          <div class="nav-bar-header">
            <Link class="icon-container" to="/">
              <h1>resonance</h1>
              <img
                class="icon"
                src={require("../../img/resonance-lower.png")}
                alt="resonance"
              />
            </Link>
            {this.props.firstName ? (
              <Link to="profile" class="first-name">
                Hello, {this.props.firstName}!
              </Link>
            ) : null}
          </div>
          <p class="statement">
            <Link to="beta">{statement}</Link>
          </p>
          <h3 class="nav-items">
            {navItems.map((navItem, i) => (
              <Link key={i} to={navItem.route}>
                {navItem.name}
              </Link>
            ))}
          </h3>
          {this.props.loggedIn ? (
            <div class="account-actions">
              <p class="logout-button" onMouseDown={() => this.props.logout()}>
                logout
              </p>
            </div>
          ) : (
            <div class="account-actions">
              <Link to="login">Login</Link>
              <Link to="signup">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
