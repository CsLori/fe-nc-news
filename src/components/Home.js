import React, { Component } from 'react';
import ArticlesList from './ArticlesList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="home">Homepage</h1>
        <ArticlesList path="/articles" />
      </div>
    );
  }
}

export default Home;
