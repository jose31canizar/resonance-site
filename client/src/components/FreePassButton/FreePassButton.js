import React, { Component } from "react";
import "./FreePassButton.styl";

class FreePassButton extends Component {
  render() {
    const { buttonType } = this.props;
    const type = this.props.white
      ? "free-pass-button white"
      : "free-pass-button";
    return (
      <div class={type} onMouseDown={() => this.props.openSignUpForm()}>
        <label class="free-pass">
          {buttonType === "beta" ? "Sign up!" : "Subscribe!"}
        </label>
      </div>
    );
  }
}

export default FreePassButton;
