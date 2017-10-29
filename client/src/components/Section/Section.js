import React, { Component } from 'react';
import Panel from '../Panel/Panel';
import './Section.styl'

class Section extends Component {
  render() {
    console.log(this.props.wallpaper);
    return (
      <div className='section'>
        <div className='section-title'>
          <h1>
            {this.props.title}
          </h1>
        </div>
        <Panel
          title={this.props.title}
          description={this.props.description}
          soundcloud={this.props.soundcloud}
          letter={this.props.letter}
          releases={require(`../../constants/${this.props.name}-releases.md`)}
          wallpaper={this.props.wallpaper}
          >
        </Panel>
      </div>
    );
  }
}

export default Section;
