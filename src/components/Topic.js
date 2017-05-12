import React, { Component } from 'react';
import store from '../store/store';
// import addTopic from '../actions/actions';

class Topic extends Component {

  addingTopic = (i) => {
    console.log('addingTopic func called');
    store.dispatch({ type: 'ADD_TOPIC', id: i});
  }

  removingTopic = (i) => {
    console.log('addingTopic func called');
    store.dispatch({ type: 'REMOVE_TOPIC', id: i});
  }

  render() {
    let followButton;
    if (this.props.followed) {
      followButton = <span className='right following' onClick={() => this.removingTopic(this.props.id)}><span className='red bold check'>✔</span>Following</span>
    } else {
      followButton = <span className='right follow' onClick={() => this.addingTopic(this.props.id)}><span className='red bold check'>+</span>Follow</span>;
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





