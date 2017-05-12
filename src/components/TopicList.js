import React, { Component } from 'react';
import Topic from './Topic';
import store from '../store/store';

class TopicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: store.getState().topics.data
    };
  }

  componentDidMount() {
      console.log('Component DID MOUNT!')
      console.log(this.state.items)
   }

  render() {
    const topicItems = this.state.items;
    const topicItemsList = topicItems.sort((a,b) => a.name > b.name).map(obj => {
      return <Topic item={ obj.name } key={ obj.id } />
    })
    
    return (
      <div className='entireList'>
        <div className='listItem'>
          <span className='bold'>Common Topics</span>  <span className='grey'>(Select to receive content on your feed)</span>
          { topicItemsList }
        </div>
      </div>
    );
  }
}

export default TopicList;






