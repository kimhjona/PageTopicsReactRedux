import React, { Component } from 'react';

class Topic extends Component {

  render() {
    console.log('Topic:',this.props);
    return (
      <div className='topicItem'>
        <hr />
        <span className='left'>{ this.props.item }</span>
        <span className='right follow'><span className='red bold check'>+</span>Follow</span>
      </div>
    );
  }
}

export default Topic;





