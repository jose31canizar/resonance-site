import React, { Component } from "react";
import "./News.styl";
import NewsData from "../../data/news.json";

export default class News extends Component {
  render() {
    return (
      <div className="news">
        {NewsData.map((newsItem, i) => (
          <div className="news-item">
            <p>News</p>
          </div>
        ))}
      </div>
    );
  }
}
