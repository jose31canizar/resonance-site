import React, { Component } from "react";
import { Link, withRouter } from "next/router";
// import "./index.styl";
import InputField, { byPropKey } from "../../components/input-field";
import Button from "../../components/button";
// import { SignUpLink } from "./signup";
// import { auth } from "../../firebase";
// import { PasswordForgetLink } from "../password-forget";
const LoginPage = ({ history }) => <Login history={history} />;

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class Login extends Component {
  state = {
    ...INITIAL_STATE
  };
  authenticate = e => {
    const { history } = this.props;
    const { email, password } = this.state;

    console.log(email, password);

    e.preventDefault();

    // auth
    //   .doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState({ ...INITIAL_STATE }, () => {
    //       history.push(HOME);
    //     });
    //   })
    //   .catch(error => {
    //     this.setState(byPropKey("error", error));
    //   });
  };
  componentDidMount() {
    window.addEventListener("keypress", this.onEnter);
  }

  onEnter = e => {
    if (e.keyCode === 13) {
      this.authenticate(e);
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keypress", this.onEnter);
  }
  render() {
    const { email, password, error } = this.state;
    const { authenticate } = this;
    return (
      <section class="auth container">
        <h3>Log into Resonance</h3>
        <InputField
          value={email}
          field="email"
          label="email"
          type="text"
          placeholder="Enter your email"
          setState={obj => this.setState(obj)}
        />
        <InputField
          value={password}
          field="password"
          label="password"
          type="password"
          placeholder="Password"
          setState={obj => this.setState(obj)}
        />
        <Button action={e => authenticate(e)} label="Log In" />
        {error && <p>{error.message}</p>}
        {/* <PasswordForgetLink />
        <SignUpLink /> */}
      </section>
    );
  }
}

export default withRouter(LoginPage);
