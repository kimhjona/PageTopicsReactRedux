import React, { Component } from 'react';
import ListItem from './ListItem';
import store from '../store/store'

class ArtList extends Component {
  render() {
    let articles = store.getState().articles.data;
    console.log(articles)
    let articlesData = articles.map(obj => {
      return <ListItem title= { obj.title } source={ obj.attribution.displayName } data={ obj.date } summary={ obj.summary } likes={ obj.likesCount } url={ obj.url } />
    })

    return (
      <div className='entireList'>
        { articlesData }
      </div>
    );
  }
}

export default ArtList;



