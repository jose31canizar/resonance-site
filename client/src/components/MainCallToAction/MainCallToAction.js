import React, { Component } from "react";
import "./MainCallToAction.styl";

class MainCallToAction extends Component {
  render() {
    return (
      <div class="main-call-to-action">
        <h2>So join us now.</h2>
        {this.props.data.map((item, i) => (
          <div class="main-call-to-action-item" key={i}>
            <h4>{item.question}</h4>
            {item.answers.map((item, i) => <p key={i}>{item}</p>)}
          </div>
        ))}
      </div>
    );
  }
}

export default MainCallToAction;
