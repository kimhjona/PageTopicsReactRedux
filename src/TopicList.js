import React, { Component } from 'react';
import Topic from './Topic';

class TopicList extends Component {
  render() {
    return (
      <div className='entireList'>
        <div className='listItem'>
          <span className='bold'>Common Topics</span>  <span className='grey'>(Select to receive content on your feed)</span>
          <Topic />
        </div>
      </div>
    );
  }
}

export default TopicList;






