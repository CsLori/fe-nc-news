import React from 'react';
import SearchBarButton from './SearchBarButton';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div>
      <Link to={'/'}>
        <h1>NC News</h1>
      </Link>
      <nav className="navbar">
        <SearchBarButton />
      </nav>
    </div>
  );
};

export default Header;
