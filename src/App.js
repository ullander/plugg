//import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Guestbook from './Guestbook';
//import axios from 'axios';

//class App extends Component {
//  render() {
//    return (
//      <Fragment>
//        <Guestbook/>
//      </Fragment>
//    );
//  }
//}

//export default App;

import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Guestbook from './Guestbook';
import OrderForm from './OrderForm';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li> 
              <Link to="/orderform/">Orderform</Link>
            </li>
            <li> 
              <Link to="/guestbook/">Guestbook</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={() => (<h1>Home</h1>)}
        />
        <Route exact path="/orderform" component={OrderForm} />
        <Route exact path="/guestbook" component={Guestbook} />
      </Fragment>
    );
  }
}

export default App;