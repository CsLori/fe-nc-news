import React from 'react';
import SearchBarButton from './SearchBarButton';
import { Link } from '@reach/router';
import SelectBox from './select-box/SelectBox';

const Header = () => {
  return (
    <div className="header">
      <header>
        <p className="loggedIn">Logged in as happyamy2016</p>

        <Link to={'/'}>
          <h1 className="title">
            <span className="n">N</span>C News
          </h1>
        </Link>
        {/* <SearchBarButton /> */}
        <SelectBox />
      </header>
    </div>
  );
};

export default Header;
