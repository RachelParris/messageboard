import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Header from '../header/Header';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
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
        this.props.onLoginSuccessful();
      })
      .catch((err) => {
        // TODO Tell user that username or password do not match
        console.log(err)
      });

      // TODO Clear form fields
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <Header logOutUser={this.props.logOutUser} />
        <div className="container">
          <h1>Welcome to Reddit-Clone App</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Email </label>
            <input 
              className="login-input"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange} />

            <label>Password </label>
            <input 
              className="login-input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange} />

            <input className="btn" type="submit" value="LOGIN" />
          </form>
          <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>
      </div>
    );
  }
}

export default Login;
