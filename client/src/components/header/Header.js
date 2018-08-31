import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => (
  <nav>
    <ul>
      <li><Link to="/register">Sign Up</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="threads">Message Board</Link></li>
      <li><Link to="threads/new">New Thread</Link></li>
      <li><Link to="/users/profile">Profile</Link></li>
      <li><Link to="/" onClick={props.logoutUser}>Logout</Link></li>
    </ul>
  </nav>
);

export default Header;