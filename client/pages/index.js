import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import * as Sections from "../components/sections";
import Banner from "../components/banner";
import "./index.styl";

const Home = () => (
  <Layout>
    <div className="home">
      <Banner />

      <img className="banner-image" src="/static/resonance-phone-outline.svg" />
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
    {Object.values(Sections).map((Section, i) => (
      <Section />
    ))}
  </Layout>
);

export default Home;
