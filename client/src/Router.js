import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import AllThreads from './components/allthreads/AllThreads';
import NewThread from './components/newthread/NewThread';


const Router = (props) => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home logoutUser={props.logoutUser} />} />
        <Route path="/register" component={Register} />
        <Route path="/login" render={() => (
          props.loggedIn ? <Redirect to="/profile" /> : <Login logOutUser={props.logOutUser} onLoginSuccessful={props.onLoginSuccessful} />
        )} />
        <Route path="/profile" render={() => <Profile onLoginSuccessful={props.onLoginSuccessful} />} />
        <Route path="/threads" component={AllThreads} />
        <Route path="/threads/new" component={NewThread} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;