import React, { Component } from 'react'
import './Speakers.styl'

class Speakers extends Component {
  render() {
    return (
      <div className="speakers-container">
        <div className="speakers">
          {this.props.data.speakers.map((speaker, i) => (
            <div className="speaker" key={i}>
              <img src={require(`../../img/${speaker.image}.png`)} />
              <h3>{speaker.name}</h3>
              <p>{speaker.description}</p>
            </div>
          ))}
        </div>
      <h2>{this.props.data.epilogue}</h2>
      </div>
    );
  }
}

export default Speakers;
