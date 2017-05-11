import React, { Component } from 'react';
import Header from './Header';
import ArtList from './ArtList';
import TopicList from './TopicList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ArtList />
        <TopicList />
      </div>
    );
  }
}

export default App;
