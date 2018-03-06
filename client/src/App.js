import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Registration from "./components/Registration/Registration";
import Beta from "./components/Beta/Beta";
import ThankYou from "./components/ThankYou/ThankYou";
import Login from "./components/Login/Login";
import "./styl/main.styl";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ThankYouData from "./data/thankyou.json";
import News from "./components/News/News";
import Featured from "./components/Featured/Featured";
import Articles from "./components/Articles/Articles";
import Profile from "./components/Profile/Profile";
import Layout from "./components/Layout/Layout";

import history from "./history";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Math.max(document.body.clientWidth, window.innerWidth || 0),
      signUpForm: false
    };
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.openSignUpForm = this.openSignUpForm.bind(this);
    this.closeSignUpForm = this.closeSignUpForm.bind(this);
  }
  openSignUpForm() {
    console.log("opening!");
    this.setState({
      signUpForm: true
    });
  }
  closeSignUpForm() {
    this.setState({
      signUpForm: false
    });
  }
  componentDidMount() {
    const w = Math.max(document.body.clientWidth, window.innerWidth || 0);
    this.setState({
      width: w
    });
    window.addEventListener("resize", () => {
      const w = Math.max(document.body.clientWidth, window.innerWidth || 0);
      this.setState({
        width: w
      });
    });
  }
  isLoggedIn() {
    return this.props.loggedIn;
  }
  render() {
    const beta = this.props.loggedIn ? (
      <Beta width={this.state.width} />
    ) : (
      <Login
        type="login"
        width={this.state.width}
        loggedIn={this.props.loggedIn}
      />
    );

    console.log(this.openSignUpForm);

    return (
      <div className="App">
        <Router history={history}>
          <Layout
            openSignUpForm={this.openSignUpForm}
            closeSignUpForm={this.closeSignUpForm}
            signUpForm={this.state.signUpForm}
            width={this.state.width}
            loggedIn={this.state.loggedIn}
            logout={this.state.logout}
          >
            <Switch>
              <Route
                path="/registration"
                render={() => (
                  <Registration
                    width={this.state.width}
                    openSignUpForm={this.openSignUpForm}
                  />
                )}
              />
              <Route
                path="/featured"
                render={() => <Featured width={this.state.width} />}
              />
              <Route
                path="/news"
                render={() => <News width={this.state.width} />}
              />
              <Route
                path="/articles"
                render={() => <Articles width={this.state.width} />}
              />
              <Route path="/profile" render={() => <Profile />} />
              <Route
                path="/beta"
                render={() => <Beta openSignUpForm={this.openSignUpForm} />}
              />
              <Route
                path="/login"
                render={() => <Login type="login" width={this.state.width} />}
              />
              <Route
                path="/signup"
                render={() => <Login type="signup" width={this.state.width} />}
              />

              <Route
                path="/thankyou"
                render={() => <ThankYou text={ThankYouData[0].text} />}
              />
              <Route
                path="/thankyoubeta"
                render={() => <ThankYou text={ThankYouData[1].text} />}
              />
              <Route
                path="*"
                render={() => {
                  console.log("render");
                  console.log(this.openSignUpForm);
                  return (
                    <Registration
                      width={this.state.width}
                      openSignUpForm={this.openSignUpForm}
                    />
                  );
                }}
              />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
