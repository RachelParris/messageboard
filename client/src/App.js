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
    // TODO Only trigger when user is actually logged in
    const cookie = Cookies.get('awesomeToken');

    this.setState({
      ...this.state,
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

  logOutUser = () => {
    Cookies.remove('awesomeToken');
  }


  render() {
    return (
      <div>
          <AppRouter 
            loggedIn={this.state.loggedIn}
            logOutUser={this.logOutUser}
            onLoginSuccessful={this.onLoginSuccessful} />
      </div>
    );
  }
}

export default App;
