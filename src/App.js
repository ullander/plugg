import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Guestbook from './Guestbook';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Guestbook/>
      </Fragment>
    );
  }
}

export default App;
