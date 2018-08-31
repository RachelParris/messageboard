import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Profile from './components/Profile';
import AllThreads from './components/AllThreads';
import NewThread from './components/NewThread';


const Router = (props) => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home logoutUser={this.logoutUser} />} />
        <Route path="/register" component={Register} />
        <Route path="/login" render={() => (
          props.loggedIn ? <Redirect to="/threads" /> : <Login onLoginSuccessful={this.onLoginSuccessful} />
        )} />
        <Route path="/users/profile" render={() => <Profile 
          user={this.state.user.username}
          sendToken={this.sendToken} />} />
        <Route path="/threads" component={AllThreads} />
        <Route path="/threads/new" component={NewThread} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;