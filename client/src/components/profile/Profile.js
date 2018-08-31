import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/Header';


class Profile extends Component {
  componentDidMount = () => {
    this.props.onLoginSuccessful();
    axios.get('/profile')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <h1>User's Profile</h1>
      </div>
    );
  }
}

export default Profile;