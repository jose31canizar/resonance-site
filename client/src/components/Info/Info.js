import React, { Component } from "react";
import FreePassButton from "../FreePassButton/FreePassButton";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Info.styl";

class Info extends Component {
  render() {
    const firstRowOfTopics = this.props.data.topics.slice(0, 2);
    const secondRowOfTopics = this.props.data.topics.slice(2, 6);
    return (
      <div class="info">
        <ScrollReveal id="info-header">
          <h2>{this.props.data.title}</h2>
          <h4 class="subtitle">{this.props.data.description.title}</h4>
          <div class="reasons">
            {this.props.data.description.reasons.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </ScrollReveal>
        <h3>{this.props.data.description.subtitle}</h3>
        <ScrollReveal id="reveal-first-row">
          <div class="block-row">
            {firstRowOfTopics.map((item, i) => (
              <div class="topic" key={i}>
                <div class="img-feature">
                  <img
                    src={require(`../../img/${item.image}.png`)}
                    alt={item.image}
                  />
                </div>
                <h4>{item.title}</h4>
                <div class="facts">
                  {item.facts.map((fact, i) => (
                    <p class="info-block-caption" key={i}>
                      {fact}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal id="reveal-second-row">
          <div class="block-row">
            {secondRowOfTopics.map((item, i) => (
              <div class="topic" key={i}>
                <div class="img-feature">
                  <img
                    src={require(`../../img/${item.image}.png`)}
                    alt={item.image}
                  />
                </div>
                <h4>{item.title}</h4>
                <div class="facts">
                  {item.facts.map((fact, i) => (
                    <p class="info-block-caption" key={i}>
                      {fact}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal id="info-epilogue">
          <h2 class="epilogue">{this.props.data.epilogue}</h2>
          <FreePassButton openSignUpForm={this.props.openSignUpForm} white />
        </ScrollReveal>
      </div>
    );
  }
}

export default Info;
