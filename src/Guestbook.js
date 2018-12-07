import React, { Component } from 'react';
import axios from 'axios';

class Guestbook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
      messages: [],
    };
  }

  async componentDidMount() {
    try {
      const apiResult = await axios.get('http://localhost:3001/');
      this.setState({ messages: apiResult.data || [] });
    } catch (e) {
      this.setState({ messages: [] })
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3001/', this.state);
    const { data } = await axios.get('http://localhost:3001/');
    this.setState({
      messages: data,
      message: '',
    });
  };

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
        <h1>Guestbook</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name-input">Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            id="name-input"
          />
          <br/>
          <label htmlFor="message-input">Message</label>
          <textarea
            onChange={this.handleChange}
            value={this.state.message}
            type="text"
            name="message"
            id="message-input"
          ></textarea>
          <button>Submit</button>
        </form>
        <ol>
          {
            (this.state.messages || []).map((message, index) => {
              return(
                <li key={index}>
                  <strong>{message.name}</strong>
                  <p>{message.message}</p>
                </li>
              );
            })
          }
        </ol>
      </div>
    );
  }
}

export default Guestbook;