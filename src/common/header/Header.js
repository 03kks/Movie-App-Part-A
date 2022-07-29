import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';
class Header extends Component {
 render() {
 return (
 <div className="header">
 <img src={logo} className="headerlogo" alt="logo" />
 </div>
 );
 }
}
export default Header;