import React, { Component } from "react";
import data from "../../data/navbar.json";
import { Link } from "react-router-dom";
import SmoothScroll from "../SmoothScroll/SmoothScroll";
import "./NavBar.styl";
import FreePassButton from "../FreePassButton/FreePassButton";
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
      <div className="nav-bar-wrapper">
        <Parallax
          className="nav-bar-background"
          src={require("../../img/waves-2.jpg")}
        />
        <div
          className={`nav-bar${this.state.flip ? " flip" : ""}${
            this.state.distance > 200 ? " black-text" : ""
          }`}
        >
          <div className="nav-bar-header">
            <Link className="icon-container" to="/">
              <h1>resonance</h1>
              <img
                className="icon"
                src={require("../../img/resonance-lower.png")}
              />
            </Link>
            {this.props.firstName ? (
              <Link to="profile" className="first-name">
                Hello, {this.props.firstName}!
              </Link>
            ) : (
              ""
            )}
          </div>
          <p className="statement">
            <Link to="beta">{statement}</Link>
          </p>
          <h3 className="nav-items">
            {navItems.map((navItem, i) => (
              <Link to={navItem.route}>{navItem.name}</Link>
            ))}
          </h3>
          {this.props.loggedIn ? (
            <div className="account-actions">
              <p
                className="logout-button"
                onMouseDown={() => this.props.logout()}
              >
                logout
              </p>
            </div>
          ) : (
            <div className="account-actions">
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
