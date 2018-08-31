import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => (
  <nav className="nav justify-content-end">
    <ul>
      <li><NavLink to="/register">Sign Up</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="threads">Message Board</NavLink></li>
      <li><NavLink to="threads/new">New Thread</NavLink></li>
      <li><NavLink to="/users/profile">Profile</NavLink></li>
      <li><NavLink to="/" onClick={props.logoutUser}>Logout</NavLink></li>
    </ul>
  </nav>
);

export default Header;