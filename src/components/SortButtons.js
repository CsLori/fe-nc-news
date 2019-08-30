import React, { Component } from 'react';

class SortButtons extends Component {
  state = {
    sort_by: ['created_at', 'votes', 'comment_count'],
    buttons: ['Date', 'Votes', 'Comments']
  };
  render() {
    const { buttons, sort_by } = this.state;
    return (
      <div>
        <h2>Sort by:</h2>
        <form>
          <div>
            {sort_by.map((sort, i) => (
              <>
                <input
                  type="radio"
                  key={sort}
                  id={sort}
                  className="sort"
                  name="sort"
                  onClick={() => this.props.fetchArticles(sort)}
                  value={sort}
                ></input>
                <label htmlFor={sort}>{buttons[i]}</label>
              </>
            ))}
          </div>
        </form>
      </div>
    );
  }
}

export default SortButtons;
