import React from 'react';
import { Link } from '@reach/router';
import SelectBox from './select-box/SelectBox';

const Header = () => {
  return (
    <div className="header">
      <div className="headerTop">
        <Link to={'/'}>
          <h1 className="title">
            <span className="n">N</span>C News
          </h1>
        </Link>
        <p className="loggedIn">Logged in as happyamy2016</p>
      </div>
      <div className="selectBox">
        <SelectBox />
      </div>
    </div>
  );
};

export default Header;
