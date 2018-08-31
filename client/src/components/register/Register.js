import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/Header';


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
        <Header />
        <div className="container">
          <h1>Create an Account</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Username </label>
            <input 
              className="register-input"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange} />

            <label>Email Address </label>
            <input 
              className="register-input"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange} />

            <label>Password </label>
            <input 
              className="register-input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange} />

            <label>Reenter Password </label>
            <input 
              className="register-input"
              type="password"
              name="password2"
              value={password2}
              onChange={this.handleChange} />

            <input className="btn" type="submit" value="JOIN" />
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    );
  }
}

export default Register;