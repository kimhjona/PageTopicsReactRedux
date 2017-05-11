import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <span className='fancyFont'>PageTopicsReactRedux</span>
          <p>
            <Link to='/home'><button>Articles</button></Link>
            <Link to='/topics'><button>Topics</button></Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;


