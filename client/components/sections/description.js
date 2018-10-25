import React, { Component } from "react";

export default class Description extends Component {
  render() {
    return (
      <div className={`section ${this.props.className}`}>
        <h2>
          Music discovery from lists curated by Tastemakers with Personality
        </h2>
        <p>
          Let me describe resonance to you like this: imagine an app where music
          was hand-picked, hand-selected, curated by, say, filmmakers, painters,
          photographers, architects. What if music spoke to not just about the
          songwriter or artist, but the character of the person sharing it as
          well? If we could see the personality of someone, just by looking at
          their playlists, collections, or history, how exciting would that be?
          Wouldn’t that create something?
        </p>
        <p>Resonance does exactly that. What follows will show you how.</p>
      </div>
    );
  }
}
