import React from 'react';

const SearchBarButton = () => {
  return (
    <form className="searchbar">
      <input type="text" placeholder="Search..." name="Search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBarButton;
