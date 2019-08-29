import React, { Component } from 'react';
import { getSingleArticle } from './Api';
import { Link } from '@reach/router';
import ArticleHeader from './ArticleHeader';
import PostComment from './PostComment';
import { deleteArticle } from './Api';
import Vote from './Vote';
import './Article.css';
import { Comments } from './Comments';
import Error from './Error';

class Article extends Component {
  state = {
    isLoading: true,
    article: null,
    error: null
  };
  render() {
    const { isLoading, article, error } = this.state;
    const { isLoggedIn } = this.props;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <Error error={error} />;
    return (
      <>
        <div className="fullArticle">
          <div className="article">
            <div className="articleTop">
              <Link to={`/topics/${article.topic}/articles`}>
                <p className="articleTopic">{article.topic}</p>
              </Link>
              <Link to={`/articles/${article.article_id}/comments`}>
                <p className="comments">Comments: {article.comment_count}</p>
              </Link>
            </div>
            <h2 className="articleTitle">{article.title}</h2>
            <em className="articleBody">{article.body}</em>
            {article.username === isLoggedIn && (
              <button
                id="deleteButton"
                onClick={() => this.removeArticle(article.article_id)}
              >
                Delete article
              </button>
            )}
            <div className="articlePost">
              <PostComment article_id={this.props.article_id} />
            </div>
            <div className="articleBottom">
              <p className="author">Author: {article.username}</p> <br />
              <p className="date">Date: {article.created_at}</p> <br />
            </div>
            <div>
              <Vote article_id={article.article_id} votes={article.votes} />{' '}
              <br /> <br />
              <Comments article_id={`${article.article_id}`} />
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount = () => {
    this.fetchArticle();
  };
  fetchArticle = () => {
    // const { error } = this.state;
    const { article_id } = this.props;
    getSingleArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false, error: null });
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

  removeArticle = article_id => {
    deleteArticle(article_id);
  };
}

export default Article;
