import React, { Component } from 'react';
import { insertComment } from './Api';

class PostComment extends Component {
  state = {
    name: '',
    comment: ''
  };
  render() {
    const { name, comment } = this.state;

    return (
      <div className="sortSomeStuff">
        <form className="addComment" onSubmit={this.handleSubmit}>
          <label>
            <h4>Name</h4>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label className="commentLabel">
            <h4>Comment</h4>
            <textarea
              type="text"
              required
              name="comment"
              rows="4"
              value={comment}
              maxLength="250"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button id="postCommentButton" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addComment();
  };

  addComment = () => {
    const { name: author, comment: body } = this.state;
    const { article_id } = this.props;
    insertComment(article_id, { author, body });
    this.setState({
      name: '',
      comment: ''
    });
  };
}

export default PostComment;
