import React, { Component } from 'react';

class SortButtons extends Component {
  state = {
    sort_by: ['created_at', 'votes', 'comment_count'],
    buttons: ['Date', 'Likes', 'Comments']
  };
  render() {
    const { buttons, sort_by } = this.state;
    return (
      <div>
        <h2>Sort by:</h2>
        {sort_by.map((sort, i) => (
          <button
            key={sort}
            className="sort"
            onClick={() => this.props.fetchArticles(sort)}
            value={sort}
          >
            {`${buttons[i]}`}
          </button>
        ))}
      </div>
    );
  }
}

export default SortButtons;
