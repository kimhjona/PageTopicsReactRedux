import React, { Component } from 'react';
import Header from './Header';
import ArtList from './ArtList';
import TopicList from './TopicList';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './App.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/'/>
      <Route path='/home' component={ArtList}/>
      <Route path='/topics' component={TopicList}/>
    </Switch>
  </main>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
