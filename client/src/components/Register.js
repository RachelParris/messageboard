import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  handleChange = (event) => {
    // Because the inputs are named to match their values in state, it's easier to update the state
    let { name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Get the form data out of state
    axios.post('/auth/register', this.state)
      .then((res) => {
        console.log(res);
        // this.props.onSignUpSuccessful(this.state);
      })
      .catch((err) => {
        console.log(err)
      });

    this.setState({
      username: '',
      email: '',
      password: '',
      password2: ''
    });
  }

  render() {
    const { username, email, password, password2 } = this.state;
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input 
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange} />

          <label>Email Address: </label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange} />

          <label>Password: </label>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange} />

          <label>Reenter Password: </label>
          <input 
            type="password"
            name="password2"
            value={password2}
            onChange={this.handleChange} />

          <input type="submit" value="Join" />
        </form>
      </div>
    );
  }
}

export default Register;