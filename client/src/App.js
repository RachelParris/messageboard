import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import './App.css';
import AppRouter from './Router';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      token: '',
      loggedIn: false
    }
  }

  onLoginSuccessful = (user) => {
    const cookie = Cookies.get('awesomeToken');

    this.setState({
      user: {
        username: user.username
      },
      token: cookie,
      loggedIn: true
    });
  }

  sendToken = () => {
    // Send the token to the backend
    axios.post('/', this.state.token)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  logoutUser = () => {
    Cookies.remove('awesomeToken');
  }


  render() {
    const { loggedIn } = this.state;

    return (
      <div>
          <AppRouter />
      </div>
    );
  }
}

export default App;
