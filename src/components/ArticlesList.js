import React, { Component } from 'react';
import { getData } from './Api';
import { Link, Router } from '@reach/router';
import Article from './Article';
import SortButtons from './SortButtons';
import './ArticlesList.css';
import Error from './Error';
import Loading from './Loading';

class ArticlesList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  };
  render() {
    const { articles, isLoading, error } = this.state;
    if (isLoading) return <Loading/>
    if (error) return <Error error={error} />;
    if (articles) {
      return (
        <div>
          <div className="fullArticles">
            <h1 className="articlesTitle">Articles</h1>
            <SortButtons fetchArticles={this.fetchArticles} />
            <ol className="articlesList">
              {articles.map(article => (
                <li key={article.article_id} className="articlesList">
                  <Link to={`/articles/${article.article_id}`}>
                    <h2 className="articleTitle">
                      <em>{article.title} </em>
                    </h2>
                    <h3>
                      <p className="articleTopic">{article.topic}</p>
                    </h3>
                  </Link>
                  <br />
                  <div className="topHalf">
                    <p className="articleVotes">Likes: {article.votes}</p>
                    <Link to={`/articles/${article.article_id}/comments`}>
                      <p className="articleComments">
                        Comments: {article.comment_count}
                      </p>
                    </Link>
                  </div>
                  <img
                    className="foodImg"
                    src={`/img/${article.topic}.jpg`}
                    alt="{article.topic}"
                  />
                  <p className="articleAuthor">Author: {article.author}</p>
                  <p className="articleDate">
                    Date: {new Date(article.created_at).toLocaleString()}
                  </p>
                </li>
              ))}
              <Router>
                <Article path="/:article_id" />
              </Router>
            </ol>
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
        console.dir(error);
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
