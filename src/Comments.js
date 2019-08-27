import React, { Component } from 'react';
import { getComments } from './components/Api';

export class Comments extends Component {
  state = { comments: '', isLoading: true, error: null };
  render() {
    const { isLoading, error, comments } = this.state;
    if (isLoading) return <p>Loading....</p>;
    if (error) return <p>Ooops...</p>;
    if (comments) {
      return (
        <>
          <header>
            <title>This is me</title>
          </header>
          <div>
            <ol className="commentsList">
              {comments.map(comment => (
                <li key={comment.comment_id}>{comment.body}</li>
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
}
