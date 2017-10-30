import React, { Component } from 'react'
import './Artists.styl'

class Speakers extends Component {
  render() {
    return (
      <div className="artists-container">
        <div className="artists">
          {this.props.data.artists.map((artist, i) => (
            <div className="artist" key={i}>
              <img src={require(`../../img/${artist.image}.png`)} />
              <h3>{artist.name}</h3>
              <p>{artist.description}</p>
            </div>
          ))}
        </div>
      <h2>{this.props.data.epilogue}</h2>
      </div>
    );
  }
}

export default Speakers;
