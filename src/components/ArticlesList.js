import React, { Component } from 'react';
import { getData } from './Api';
import { Link, Router } from '@reach/router';
import Article from './Article';
import SortButtons from './SortButtons';

class ArticlesList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  };
  render() {
    const { articles, isLoading, error } = this.state;
    if (isLoading) return <p>Loading....</p>;
    if (error) return <p>Ooops...</p>;
    if (articles) {
      return (
        <div>
          <SortButtons fetchArticles={this.fetchArticles} />
          <title>Articles</title>
          {articles.map(article => (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <li>{article.title} </li>
            </Link>
          ))}
          <Router>
            <Article path="/:article_id" />
          </Router>
        </div>
      );
    }
  }

  componentDidMount = () => {
    this.fetchArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.uri !== this.props.uri) this.fetchArticles();
  };
  fetchArticles = (sort) => {
    console.log(sort)
    const { topic_slug } = this.props;
    getData(topic_slug).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
