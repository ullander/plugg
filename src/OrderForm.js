import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 1. Render a form

// 2. Render a <button> to add an item (this.state.items) to the order form

// 3. Loop through this.state.items, for each item,
//  3.1. render a <select> dropdown that contains availableItems 
//  3.2. and a quantity <input type="number"> field
//  3.3. and a <button> to remove the item the <button> belongs to.

// 4. Display the total price for all items and the quantity of items somewhere on the page

// 5. Add a "Submit Order" <button>

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: 0,
      itemList: [],
    };
  }

  newItem = async () => {
    const item = {name: this.state.name, price: this.state.price};
    await this.setState({
      itemList: [...this.state.itemList, item],
    });
  }
  
  clearList = async () => {
    await this.setState({
      itemList: [],
    });
  }

  removeItem = async (itemToRemove) => {
    const filteredItemList = this.state.itemList.filter((item) => item !== itemToRemove);

    await this.setState({
      itemList: filteredItemList,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.newItem();
  }
  
  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value,
    });
  }


  render() {
    return (
      <div>
        <h1>Order Form</h1>
        <form
        onSubmit={this.handleSubmit}
        >
        <label htmlFor="name-input">Item</label>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
          name="name"
          id="name-input"
        />
        <br/>
        <label htmlFor="price-input">Price</label>
        <input
          onChange={this.handleChange}
          value={this.state.price}
          type="number"
          name="price"
          id="price-input"
        />
        <button>Submit</button>
        </form>
        <ul>
        {
          (this.state.itemList || []).map((item, index) => {
          return(
            <li id={index} key={index}>
            <strong>{item.name}</strong> - <small>{item.price} kr</small> <button onClick={this.removeItem.bind(null, item)}>Delete</button>
            </li>
          );
          })
        }
        </ul> 
        <label htmlFor="Total Price"><strong>Total Price: </strong>{this.state.itemList.reduce((memo, item) => memo + parseInt(item.price), 0)}<small>kr</small></label>
        <button onClick={this.clearList}>Clear</button>
      </div>
    );
  }
}

export default OrderForm;



