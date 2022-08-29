import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return (
        <>
            <p>This is news component </p>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </>
    )
  }
}

export default News;
