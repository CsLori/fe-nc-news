import React, { Component } from 'react';
import { getData } from './Api';
import SortButtons from './SortButtons';
import './ArticlesList.css';
import Error from './Error';
import Loading from './Loading';
import Articlecards from './Articlecards';
import Page from './Page';

class ArticlesList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null,
    page: 1,
    maxPage: null
  };
  render() {
    const { articles, isLoading, error, maxPage, page } = this.state;
    if (isLoading) return <Loading />;
    if (error) return <Error error={error} />;
    if (articles) {
      return (
        <div>
          <div className="fullArticles">
            <h1 className="articlesTitle">Articles</h1>
            <SortButtons fetchArticles={this.fetchArticles} />
            <Page
              page={page}
              changePage={this.changePage}
              maxPage={maxPage}
            />
            <Articlecards articles={articles} />
          </div>
        </div>
      );
    }
  }
  changePage = direction => {
    this.setState(({ page }) => {
      return { page: page + direction };
    });
  };

  componentDidMount = () => {
    this.fetchArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const uriChange = prevProps.uri !== this.props.uri;
    const pageChange = this.state.page !== prevState.page;
    if (uriChange || pageChange) this.fetchArticles();
  };
  fetchArticles = sort => {
    const { topic_slug } = this.props;
    const { page } = this.state;
    getData(topic_slug, sort, page)
      .then(({ articles, total_count }) => {
        const maxPage = Math.ceil(total_count / 10);
        console.log(total_count);
        this.setState({ articles, isLoading: false, maxPage });
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
