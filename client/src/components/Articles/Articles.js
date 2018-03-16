import React, { Component } from "react";
import "./Articles.styl";
import ArticlesData from "../../data/articles.json";
import VernonArticle from "../../data/articles/justin_vernon.md";
import "./Articles.styl";

export default class Articles extends Component {
  render() {
    console.log(VernonArticle);
    return (
      <div className="articles">
        {ArticlesData.map((article, i) => (
          <div className="article">
            <time>March 15th, 2018</time>
            <label>By Jordan Gillmore</label>
            <VernonArticle />
          </div>
        ))}
      </div>
    );
  }
}
