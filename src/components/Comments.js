import React, { Component } from 'react';
import { getComments } from './Api';
import { deleteComment } from './Api';
import './Comments.css'
export class Comments extends Component {
  state = { comments: '', isLoading: true, error: null };
  render() {
    const { isLoading, error, comments } = this.state;
    // const { isLoggedIn } = this.props;
    if (isLoading) return <p>Loading....</p>;
    if (error) return <p>Ooops...</p>;
    if (comments) {
      return (
        <>
          <header>
            <title className="commentTitle">Comment section</title>
          </header>
          <div className="comments">
            <ol className="commentsList">
              {comments.map(comment => (
                <li key={comment.comment_id}>
                  {comment.body}{' '}
                  <button
                    className="deleteButton"
                    onClick={() => this.removeComment(comment.comment_id)}
                  >
                    Delete comment
                  </button>
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
