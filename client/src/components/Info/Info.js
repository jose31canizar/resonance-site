import React, { Component } from "react";
import FreePassButton from "../FreePassButton/FreePassButton";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Info.styl";

class Info extends Component {
  render() {
    const firstRowOfTopics = this.props.data.topics.slice(0, 2);
    const secondRowOfTopics = this.props.data.topics.slice(2, 6);
    return (
      <div className="info">
        <ScrollReveal id="info-header">
          <h2>{this.props.data.title}</h2>
          <h4 className="subtitle">{this.props.data.description.title}</h4>
          <div className="reasons">
            {this.props.data.description.reasons.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </ScrollReveal>
        <h3>{this.props.data.description.subtitle}</h3>
        <ScrollReveal id="reveal-first-row">
          <div className="first-row-topics">
            {firstRowOfTopics.map((item, i) => (
              <div className="topic" key={i}>
                <div className="img-feature">
                  <img src={require(`../../img/${item.image}.png`)} />
                </div>
                <h4>{item.title}</h4>
                <div className="facts">
                  {item.facts.map((fact, i) => <p key={i}>{fact}</p>)}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal id="reveal-second-row">
          <div className="second-row-topics">
            {secondRowOfTopics.map((item, i) => (
              <div className="topic" key={i}>
                <div className="img-feature">
                  <img src={require(`../../img/${item.image}.png`)} />
                </div>
                <h4>{item.title}</h4>
                <div className="facts">
                  {item.facts.map((fact, i) => <p key={i}>{fact}</p>)}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal id="info-epilogue">
          <h2 className="epilogue">{this.props.data.epilogue}</h2>
          <FreePassButton openSignUpForm={this.props.openSignUpForm} white />
        </ScrollReveal>
      </div>
    );
  }
}

export default Info;
