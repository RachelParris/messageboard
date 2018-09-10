import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './Header.css';


const user = {
  icon: 'http://placekitten.com/100/100'
}

const faangledown = <FontAwesomeIcon icon={faAngleDown} />
/*
  <ul>
    <li><NavLink to="threads">Message Board</NavLink></li>
    <li><NavLink to="threads/new">New Thread</NavLink></li>
    <li><NavLink to="/profile">Profile</NavLink></li>
    <li><NavLink to="/" onClick={props.logOutUser}>Logout</NavLink></li>
  </ul>
*/

const Header = (props) => (
  <nav className="nav justify-content-end">
    <div className="nav__logo">
      <h1>reddit</h1>
    </div>
    <div className="nav__search">
      <form className="nav__search-form" action="">
        <input className="nav__search-input" type="text" name="" id="" placeholder="Search"/>
      </form>
    </div>
    <div className="nav__user">
      <ul>
        <li><NavLink to="/login"><button className="btn btn__login">Login</button></NavLink></li>
        <li><NavLink to="/register"><button className="btn btn__signup">Sign Up</button></NavLink></li>
        <li><button className="btn btn__user"><img className="nav__icon" src={user.icon} alt=""/> username {faangledown}</button></li>
      </ul>
    </div>
  </nav>
);

export default Header;