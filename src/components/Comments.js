import React, { Component } from 'react';
import { getComments } from './Api';
import { deleteComment } from './Api';
import './Comments.css';
import { VoteComment } from './VoteComment';

export class Comments extends Component {
  state = { comments: '', isLoading: true, error: null };
  render() {
    const { isLoggedIn } = this.props;
    const { isLoading, error, comments } = this.state;
    // const { isLoggedIn } = this.props;
    if (isLoading) return <p>Loading....</p>;
    if (error) return <p>Ooops...</p>;
    if (comments) {
      return (
        <>
          <h1 className="commentTitle">Comment section</h1>
          <div className="commentsList">
            <ol>
              {comments.map(comment => (
                <li key={comment.comment_id}>
                  <div className="commentTop">
                    <p>Author: {comment.author}</p> <br />
                    <p>
                      Date: {new Date(comment.created_at).toLocaleString()}
                    </p>{' '}
                    <br />
                  </div>
                  <em>{comment.body}</em> <br />
                  <br />
                  <VoteComment
                    comment_id={comment.comment_id}
                    votes={comment.votes}
                  />
                  {comment.author === isLoggedIn && (
                    <button
                      className="deleteButton"
                      onClick={() => this.removeComment(comment.comment_id)}
                    >
                      Delete comment
                    </button>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </>
      );
    }
  }

  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = () => {
    const { article_id } = this.props;
    // console.log(this.props, 'comments');
    getComments(article_id).then(comments => {
      //   console.log(comments, 'comment');
      this.setState({ comments, isLoading: false });
    });
  };
  removeComment = comment_id => {
    deleteComment(comment_id);
  };
}
