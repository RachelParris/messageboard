import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import NewThread from './components/NewThread';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      loggedIn: false
    }
  }

  onLoginSuccessful = (user) => {
    this.setState({
      user,
      loggedIn: true
    });
  }

  render() {
    const { loggedIn } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/register" component={Register} />
          <Route path="/login" render={() => (
            loggedIn ? <Redirect to="/users/profile" /> : <Login onLoginSuccessful={this.onLoginSuccessful} />
          )} />
          <Route path="/users/profile" render={() => <Profile user={this.state.user.username} />} />
          <Route path="/threads" component={NewThread} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
