import React from 'react';
import { Link, Router } from '@reach/router';
import Article from '../Article';

const Articlecards = ({ articles }) => {
    console.log(articles);
  return (
    <div>
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
  );
};

export default Articlecards;
