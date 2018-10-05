import { Component } from "react";
import Nav from "./nav";
import Head from "./head";
import "./layout.styl";

export default class Layout extends Component {
  render() {
    return (
      <div class="layout">
        <Head />
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
