import React, { Component } from 'react';
import Topic from './Topic';
import store from '../store/store';

class TopicList extends Component {

  render() {
    let count = store.getState().following.length;
    let alreadyDone = false;
    setInterval(() => {
      if (store.getState().following.length !== count) {
        if (!alreadyDone) this.forceUpdate();
        alreadyDone = true;
        count = store.getState().following.length;
      }
    }, 150)

    const topicItems = store.getState().topics.data;
    const topicItemsList = topicItems.sort((a,b) => a.name > b.name).map(obj => {
      if (store.getState().following.includes(obj.id)) {
        return <Topic item={ obj.name } key={ obj.id } id={ obj.id } followed={ true }/>
      } else {
        return <Topic item={ obj.name } key={ obj.id } id={ obj.id } followed={ false }/>
      }
    })

    return (
      <div className='entireList'>
        <div className='listItem'>
          <span className='bold'>Common Topics</span>  <span className='grey'>(Select to receive content on your feed)</span>
          <p></p><p></p>
          { topicItemsList }
        </div>
      </div>
    );
  }
}

export default TopicList;






