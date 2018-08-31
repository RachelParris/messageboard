import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/Header';


class NewThread extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      message: ''
    }
  }

  handleChange = (event) => {
    let { name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Get the form data out of state
    axios.post('/threads', this.state)
      .then((res) => {
        console.log(res);
        // this.props.onThreadCreation(this.state);
      })
      .catch((err) => {
        console.log(err)
      });

      // TODO Clear form fields
  }

  render () {
    const { title, message } = this.state;

    return (
      <div>
        <Header />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Title: </label>
            <input 
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange} />

            <label>Message: </label>
            <textarea 
              name="message"
              col="50"
              rows="10"
              value={message}
              onChange={this.handleChange}>
            </textarea>

            <input type="submit" value="Create Thread" />
          </form>
        </div>
      </div>
    );
  }
}

export default NewThread;