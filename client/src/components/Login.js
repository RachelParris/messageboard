import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: ''
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
    axios.post('/auth/login', this.state)
      .then((res) => {
        console.log(res);
        this.props.onLoginSuccessful(this.state);
      })
      .catch((err) => {
        console.log(err)
      });

      // TODO Clear form fields
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input 
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange} />

          <label>Password: </label>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange} />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
