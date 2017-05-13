import React, { Component } from 'react';
import ListItem from './ListItem';
import store from '../store/store'

class ArtList extends Component {
  render() {
    let articles = store.getState().articles.data;
    const following = store.getState().following;
    console.log('following:', following)
    console.log('articles before:', articles)
    console.log(store.getState())
    let newArticles = [];
    articles.forEach(el => {
      let included = false;
      el.topics.forEach(e => {
        if (following.includes(e.id)) included = true;
      })
      if (included) newArticles.push(el)
    })
    console.log('newArticles:', newArticles)
    let articlesData = newArticles.map(obj => {
      return <ListItem title={ obj.title } source={ obj.attribution.displayName } data={ obj.date } summary={ obj.summary } likes={ obj.likesCount } key={obj.id} url={ obj.url } date={ obj.createdAt }/>
    })

    return (
      <div className='entireList'>
        { articlesData }
      </div>
    );
  }
}

export default ArtList;



