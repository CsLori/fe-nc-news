import React, { Component } from 'react';

class PostComment extends Component {
  state = { name: '' };
  render() {
    const { name } = this.state;
    return (
      <div>
        <form className="addComment" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
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
  };
}

export default PostComment;
