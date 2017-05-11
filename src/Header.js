import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TestingRedux from './TestingRedux';

class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <span className='fancyFont'>PageTopicsReactRedux</span>
          <p>
            <span className='button'><NavLink to='/home' activeClassName='activeLink'>Articles</NavLink></span>
            <span className='button'><NavLink to='/topics' activeClassName='activeLink'>Topics</NavLink></span>
          </p>
            <TestingRedux />
        </div>
      </div>
    );
  }
}

export default Header;


