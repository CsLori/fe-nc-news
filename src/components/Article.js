import React, { Component } from 'react';
// import { getData } from './Api';
import { getSingleArticle } from './Api';
import { Link } from '@reach/router';
import ArticleHeader from './ArticleHeader';

class Article extends Component {
  state = {
    isLoading: true,
    article: null
  };
  render() {
    const { isLoading, article } = this.state;
    // console.log(article.topic, 'slug');
    if (isLoading) return <p>Loading...</p>;
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
          <p>Comments: {article.comment_count}</p>
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
    // console.log(article_id);
    getSingleArticle(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };
}

export default Article;
