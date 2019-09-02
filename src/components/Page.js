import React from 'react';

function Page({ page, maxPage, changePage }) {
  return (
    <>
      <div className="pagination">
        <button
          className="nextPage"
          onClick={() => changePage(-1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <p className="page">Page:{page}</p>
        <button
          className="prevPage"
          onClick={() => changePage(1)}
          disabled={page === maxPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Page;
