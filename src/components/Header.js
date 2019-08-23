import React from 'react';

const Header = () => {
  return (
    <div>
      <h1>NC News</h1>
      <nav className="navbar">
        <form className="searchbar">
          <input type="text" placeholder="Search..." name="Search" />
          <button type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
