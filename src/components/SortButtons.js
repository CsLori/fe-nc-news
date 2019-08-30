import React from 'react';

function SortButtons({fetchArticles}) {
  const sort_by = ['created_at', 'votes', 'comment_count'];
  const buttons = ['Date', 'Likes', 'Comments'];

  return (
    <div>
      <h2>Sort by:</h2>
      <form>
        <div>
          {sort_by.map((sort, i) => (
            <div key={sort}>
              <input
                type="radio"
                key={sort}
                id={sort}
                className="sort"
                name="sort"
                onClick={() => fetchArticles(sort)}
                value={sort}
              ></input>
              <label htmlFor={sort}>{buttons[i]}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default SortButtons;
