import React, { Component } from "react";
import "./Artists.styl";

class Speakers extends Component {
  render() {
    return (
      <div class="artists-container">
        <div class="artists">
          {this.props.data.artists.map((artist, i) => (
            <div class="artist" key={i}>
              <img
                src={require(`../../img/${artist.image}.png`)}
                alt={artist.image}
              />
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
