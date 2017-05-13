import React, { Component } from 'react';
import store from '../store/store';
// import addTopic from '../actions/actions';

class Topic extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     follow: this.props.followed
  //   };
  //   // this._onButtonClick = this._onButtonClick.bind(this);
  // }


  topicToggle = (i) => {
    // console.log('addingTopic func called');
    store.dispatch({ type: 'TOPIC_TOGGLE', id: i});
    // console.log(this.state)
    // this.setState({
    //   follow: !this.state.follow
    // })
    // setTimeout(() => console.log(this.state), 5000)
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





