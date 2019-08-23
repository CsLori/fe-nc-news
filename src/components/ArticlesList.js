import React, { Component } from 'react';
import getData from './Api';
import { Link } from '@reach/router';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    error: null
  };
  render() {
    const { articles, isLoading, error } = this.state;
    if (isLoading) return <p>Loading....</p>;
    if (error) return <p>Ooops...</p>;
    return (
      <div>
        <title>Articles</title>
        <Link to=''>
          <ul className="articleList">
            {articles.map(article => (
              <li key={article.article_id}>{article.title} </li>
            ))}
          </ul>
        </Link>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticles();
  };
  fetchArticles = () => {
    getData().then(articles => {
      console.log(articles);
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
