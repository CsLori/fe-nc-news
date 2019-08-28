import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Router } from '@reach/router';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import Topics from './components/TopicsList';
import { Comments } from './components/Comments';

class App extends Component {
  state = {
    isLoggedIn: 'happyamy2016'
  };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <Header />

        <Router>
          <Home path="/" />
          <Topics path="/topics/" />
          <ArticlesList path="/topics/:topic_slug/articles" />
          <ArticlesList path="/articles" />
          <Article path="/articles/:article_id" isLoggedIn={isLoggedIn}/>
          <Comments path="/articles/:article_id/comments" isLoggedIn={isLoggedIn}/>
        </Router>
      </div>
    );
  }
}

export default App;
