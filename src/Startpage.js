import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const Guestbook = () => <h2>Guestbook</h2>
const OrderForm = () => <h2>Order Form</h2>;


const Startpage = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/startpage">Home</Link>
          </li>
          <li> 
            <Link to="/guestbook">Guestbook</Link>
          </li>
          <li>
            <Link to="/orderform">Order Form</Link>
          </li>
        </ul>
      </nav>

      <Route path="/startpage" exact component={Index} />
      <Route path="/guestbook" component={Guestbook} />
      <Route path="/orderform" component={OrderForm} />
    </div>
  </Router>
);

export default Startpage;