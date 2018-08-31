import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/Header';


class Profile extends Component {
  componentDidMount = () => {
    const { user } = this.props;

    axios.get('/users/profile', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <div>
          <Header />
        </div>
        <h1>{user ? user : 'Jane Doe'}'s Profile</h1>
      </div>
    );
  }
}

export default Profile;