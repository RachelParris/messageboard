import React, { Component } from 'react';
import axios from 'axios';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

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
        <h1>{user ? user : 'Jane Doe'}'s Profile</h1>
      </div>
    );
  }
}

export default Profile;