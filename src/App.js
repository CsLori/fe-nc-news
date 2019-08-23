import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Router } from '@reach/router';
import ArticlesList from './components/ArticlesList';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path='/' />
        <ArticlesList path='/articles'/>
      </Router>
    </div>
  );
}

export default App;
