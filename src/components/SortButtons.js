import React, { Component } from 'react';
import { getData } from './Api';

class SortButtons extends Component {
  state = {
    sort_by: ['created_at', 'votes', 'comment_count'],
    buttons: ['Date', 'Likes', 'Comments']
  };
  render() {
    const { buttons, sort_by } = this.state;
    return (
      <div>
        {sort_by.map((sort, i) => (
          <button
            className="sort"
            onCLick={this.props.fetchArticles(sort)}
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
