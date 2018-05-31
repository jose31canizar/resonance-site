import React, { Component } from "react";
import "./Benefits.styl";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

class Benefits extends Component {
  render() {
    return (
      <div class="benefits">
        <h2>{this.props.data.title}</h2>
        {this.props.data.benefits.map((benefit, i) => (
          <ScrollReveal id={"reveal-benefit-" + i} key={i}>
            <div class="benefit" key={i}>
              <p class="number">{i + 1}</p>
              <div class="content">
                <h4>{benefit.title}</h4>
                <p>{benefit.problem}</p>
                <p>{benefit.solution}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    );
  }
}

export default Benefits;
