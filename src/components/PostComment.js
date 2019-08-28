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
      <div>
        <form className="addComment" onSubmit={this.handleSubmit}>
          <label>
            Name <br/>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Comment <br/>
            <textarea
              type="text"
              required
              name="comment"
              rows="4"
              value={comment}
              maxLength="250"
              onChange={this.handleChange}
            />
          </label> <br/>
          <button id="postCommentButton" type="submit">Submit</button>
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
