import React, { Component } from "react";
import "./News.styl";
import NewsData from "../../data/news.json";

export default class News extends Component {
  render() {
    return (
      <div class="news">
        {NewsData.map((newsItem, i) => (
          <div class="news-item">
            <h2>{newsItem.headline}</h2>
            <h3>{newsItem.caption}</h3>
            <div class="paragraph">
              <p>{newsItem.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
