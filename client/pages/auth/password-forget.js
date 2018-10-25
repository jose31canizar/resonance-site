import React, { Component } from "react";
import { Link } from "next/router";
// import { auth } from "../../firebase";
import * as routes from "../../constants/routes";
import InputField, { byPropKey } from "../../components/input-field";
import Button from "../../components/button";

const PasswordForgetPage = () => <PasswordForgetForm />;

const INITIAL_STATE = {
  email: "",
  error: null,
  message: ""
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    event.preventDefault();

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState({
          ...INITIAL_STATE,
          message: "Check your email to reset your password."
        });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  componentDidMount() {
    window.addEventListener("keypress", this.onEnter);
  }

  onEnter = e => {
    if (e.keyCode === 13) {
      this.onSubmit(e);
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keypress", this.onEnter);
  }
  render() {
    const { email, error, message } = this.state;

    const isInvalid = email === "";

    return (
      <section class="auth container">
        <h3>Reset your password below</h3>
        <InputField
          value={this.state.email}
          field="email"
          label="Email"
          type="text"
          setState={obj => this.setState(obj)}
          placeholder="Email Address"
        />
        <Button
          disabled={isInvalid}
          action={this.onSubmit}
          label="Reset My Password"
        />

        {error && <p>{error.message}</p>}
        {message && <p>{message}</p>}
      </section>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
