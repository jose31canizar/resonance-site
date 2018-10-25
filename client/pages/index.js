import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Layout from "../components/layout";
import * as Sections from "../components/sections";
import Banner from "../components/banner";
import "./index.styl";
class Home extends Component {
  state = {
    selected: null
  };
  handleScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  checkSection = name => {
    if (this[name]) {
      let rect = ReactDOM.findDOMNode(this[name]).getBoundingClientRect();
      if (rect.y < 200 && rect.y + rect.height > 200) {
        return "fullscreen";
      }
    }

    return this.state.selected === name ? "fullscreen" : "";
  };
  render() {
    return (
      <Layout>
        <div className="home">
          <Banner />

          <img
            className="banner-image"
            src="/static/resonance-phone-outline.svg"
          />
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          </svg>
        </div>
        {Object.entries(Sections).map(([name, Section], i) => (
          <div>
            <Section
              ref={r => (this[name] = r)}
              className={this.checkSection(name)}
            />
          </div>
        ))}
      </Layout>
    );
  }
}

export default Home;
