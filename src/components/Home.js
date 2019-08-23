import React, { Component } from 'react';
import ArticlesList from './ArticlesList';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Articles</h2>

        <ArticlesList path="/articles" />
      </div>
    );
  }
}

export default Home;
