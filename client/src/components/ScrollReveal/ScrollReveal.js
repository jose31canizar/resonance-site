import React, { Component } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './ScrollReveal.styl'

export default class Info extends Component {
  constructor(props){
      super(props);
      this.state={
        show:false
      };
      this.hide = this.hide.bind(this)
    }
  hide(){
    let { isHidden } = this.state
    var rect = document.getElementById(this.props.id).getBoundingClientRect();
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // var bottomOfViewport = window.pageYOffset + h
    console.log('rect.top');
    console.log(rect.top);
    console.log('h');
    console.log(h);
    console.log('state');
    console.log(this.state.show);

    if( rect.top < h) {
      this.setState({ show: true});
    } else {
      this.setState({ show: false});
    }
  }
  componentDidMount(){
      window.addEventListener('scroll',this.hide);
  }
  componentWillUnmount(){
       window.removeEventListener('scroll',this.hide);
  }
  render() {
    return (
      <div id={this.props.id} style={{ width: '100%'}}>
        <div className='scroll-reveal' style={{visibility: this.state.show ? 'visible' : 'hidden', animation: this.state.show ? 'reveal 1s' : 'none'}}>
        {this.props.children}
        </div>
      </div>
    );
  }
}
