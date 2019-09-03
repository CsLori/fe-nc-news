import React from 'react';
import { Link } from '@reach/router';
import SelectBox from './select-box/SelectBox';

const Header = ({ isLoggedIn }) => {
  return (
    <div className="header">
      <div className="headerTop">
        <Link to={'/'}>
          <h1 className="title">
            <span className="n">N</span>C News
          </h1>
        </Link>
        <p className="loggedIn">{`Logged in as ${isLoggedIn}`}</p>
      </div>

      <div className="selectBox">
        <SelectBox />
      </div>
    </div>
  );
};

export default Header;
