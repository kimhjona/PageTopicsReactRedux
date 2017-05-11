import React, { Component } from 'react';
// import './App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <span className='fancyFont'>PageTopicsReactRedux</span>
          <p>
            <button>Articles</button>
            <button>Topics</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;


