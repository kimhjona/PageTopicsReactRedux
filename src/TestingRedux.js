import React, { Component } from 'react';

class TestingRedux extends Component {
  render() {
    return (
      <div>
        <input id="firstname" type="text" placeholder="First Name" />
        <input id="lastname" type="text" placeholder="Last Name" />
        <button onClick={this.onAddPersonClick}>Add Person</button>
      </div>
    );
  }
}

export default TestingRedux;


