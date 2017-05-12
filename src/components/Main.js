import React from 'react';
import ArtList from './ArtList';
import TopicList from './TopicList';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ArtList} />
      <Route path='/home' component={ArtList} />
      <Route path='/topics' component={TopicList}/>
    </Switch>
  </main>
)

export default Main;  