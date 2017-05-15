import React, { Component } from 'react';
import store from '../store/store';

class Topic extends Component {

  topicToggle = (i) => {
    // action is right here
    store.dispatch({ type: 'TOPIC_TOGGLE', id: i});
  }

  render() {
    let followButton;
    if (this.props.followed) {
      followButton = <span className='right following' onClick={() => this.topicToggle(this.props.id)}><span className='red bold check'>✔</span>Following</span>
    } else {
      followButton = <span className='right follow' onClick={() => this.topicToggle(this.props.id)}><span className='red bold check'>+</span>Follow</span>;
    }
    return (
      <div className='topicItem'>
        <div className='topicArea'>
          <span className='left'>{ this.props.item }</span>
          { followButton }
        </div>
      </div>
    );
  }
}

export default Topic;





