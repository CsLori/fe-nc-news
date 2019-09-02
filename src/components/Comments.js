import React, { Component } from 'react';
import { getComments } from './Api';
import { deleteComment } from './Api';
import './Comments.css';
import { VoteComment } from './VoteComment';
import Loading from './Loading';
import { insertComment } from './Api';
import PostComment from './PostComment';

export class Comments extends Component {
  state = { comments: '', isLoading: true, error: null };
  render() {
    const { isLoggedIn } = this.props;
    const { isLoading, error, comments } = this.state;
    if (isLoading) return <Loading />;
    if (error) return <p>Ooops...</p>;
    if (comments) {
      return (
        <>
          <h1 className="commentTitle">Comment section</h1>
          <div className="commentsList">
            <PostComment className="postComment" addComment={this.addComment} />

            <ol>
              {comments.map(comment => (
                <li key={comment.comment_id}>
                  <div className="commentTop">
                    <p>{comment.author}</p>
                    <p>{new Date(comment.created_at).toLocaleString()}</p>
                  </div>
                  <p className="commentsCommentBody">{comment.body}</p> <br />
                  <br />
                  <VoteComment
                    className="voteButtons"
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

  addComment = newComment => {
    const { article_id } = this.props;
    insertComment(article_id, newComment).then(comment => {
      this.setState(({ comments }) => {
        return { comments: [comment, ...comments] };
      });
    });
  };

  fetchComments = () => {
    const { article_id } = this.props;
    // console.log(this.props, 'comments');
    getComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };
  removeComment = comment_id => {
    deleteComment(comment_id);
  };
}
