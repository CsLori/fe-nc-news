import React, { Component } from 'react';
import { getComments } from './Api';
import { deleteComment } from './Api';
import './Comments.css';
import Loading from './Loading';
import { insertComment } from './Api';
import PostComment from './PostComment';
import CommentsCard from './CommentsCard';
import Error from './Error';

export class Comments extends Component {
  state = { comments: [], isLoading: true, error: null };
  render() {
    const { isLoggedIn } = this.props;
    const { isLoading, error, comments } = this.state;
    if (isLoading) return <Loading />;
    if (error) return <Error />;
    if (comments) {
      return (
        <>
          <h1 className="commentTitle">Comment section</h1>
          <div className="commentsList">
            <PostComment className="postComment" addComment={this.addComment} />
            <CommentsCard
              isLoggedIn={isLoggedIn}
              comments={comments}
              addComment={this.addComment}
              removeComment={this.removeComment}
            />
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
    getComments(article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false, error: null });
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
  removeComment = comment_id => {
    const { article_id } = this.props;

    deleteComment(comment_id, article_id).then(() => {
      this.setState(prevState => {
        const result = prevState.comments.filter(
          comment => comment.comment_id !== comment_id
        );
        return { comments: result };
      });
    });
  };
}
