import React, { Component } from 'react';
import { getData } from './Api';
import SortButtons from './SortButtons';
import './ArticlesList.css';
import Error from './Error';
import Loading from './Loading';
import Articlecards from './Articlecards';

class ArticlesList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  };
  render() {
    const { articles, isLoading, error } = this.state;
    if (isLoading) return <Loading />;
    if (error) return <Error error={error} />;
    if (articles) {
      return (
        <div>
          <div className="fullArticles">
            <h1 className="articlesTitle">Articles</h1>
            <SortButtons fetchArticles={this.fetchArticles} />
            <Articlecards articles={articles} />
          </div>
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
  fetchArticles = sort => {
    const { topic_slug } = this.props;
    getData(topic_slug, sort)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(error => {
        const {
          response: {
            status,
            data: { msg }
          }
        } = error;
        this.setState({ error: { msg, status }, isLoading: false });
      });
  };
}

export default ArticlesList;
