import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Router } from '@reach/router';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import Topics from './components/Topics';
import SelectBox from './components/select-box/SelectBox';

function App() {
  return (
    <div className="App">
      <Header />
      <SelectBox
        width={200}
        items={[
          { value: 'coding', id: 1 },
          { value: 'cooking', id: 2 },
          { value: 'football', id: 3 }
        ]}
      />
      <Router>
        <Home path="/" />
        <Topics path="/topics/" />
        <ArticlesList path="/topics/:topic_slug/articles/" />
        <ArticlesList path="/articles/" />
        <Article path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
