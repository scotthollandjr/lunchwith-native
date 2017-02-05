import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router />
      </Provider>
    )
  }
}

export default App;
