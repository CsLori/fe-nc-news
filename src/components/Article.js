import React, { Component } from 'react';
import { getSingleArticle } from './Api';
import { Link } from '@reach/router';
import ArticleHeader from './ArticleHeader';

class Article extends Component {
  state = {
    isLoading: true,
    article: null,
    error: null
  };
  render() {
    const { article_id } = this.props;
    console.log(article_id, 'article');
    const { isLoading, article, error } = this.state;
    // console.log(article.topic, 'slug');
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;

    return (
      <>
        <ArticleHeader />
        <div className="article">
          <Link to={`/topics/${article.topic}/articles`}>
            <p>{article.topic}</p>
          </Link>
          <p>{article.title}</p>
          <p>Article: {article.body}</p>
          <p>Date: {article.created_at}</p>
          <p>Author: {article.username}</p>
          <Link to={`/articles/${article.article_id}/comments`}>
            <p>Comments: {article.comment_count}</p>
          </Link>
          <p>Votes: {article.votes}</p>
        </div>
      </>
    );
  }
  componentDidMount = () => {
    this.fetchArticle();
  };
  fetchArticle = () => {
    const { article_id } = this.props;
    getSingleArticle(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };
}

export default Article;
