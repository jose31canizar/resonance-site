import React from "react";
import "./index.styl";

const Button = props => (
  <div class="button-wrapper" onMouseDown={props.attempt}>
    <button class="button" onMouseDown={props.action} disabled={props.disabled}>
      <label for={!props.disabled && props.htmlFor}>{props.label}</label>
    </button>
  </div>
);
export default Button;
