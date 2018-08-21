import React, { Component } from 'react';
// import axios from 'axios';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {}
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