import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

// BEM Block Element Modifier

const Navbar = () => {
  return (
    <div className="gpt1__navbar">
      <div className="gpt1__navbar-links">
        <div className="gpt1__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt1__navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt1">What is GPT1</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar