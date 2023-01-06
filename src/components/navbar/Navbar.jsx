import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

// BEM Block Element Modifier

const Menu = () => {
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt1">What is GPT1</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt1__navbar">
      <div className="gpt1__navbar-links">
        <div className="gpt1__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt1__navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="gpt1__navbar-sign">
        <p>Sign in</p>
        <button className="" type="button">Sign up</button>
      </div>
      <div className="gpt1__navbar-menu">
        {toggleMenu ?
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div clasName="gpt1__navbar-menu-container scale-up-center">
            <div className="gpt1__navbar-menu-container-links">
              <Menu />
              <div className="gpt1__navbar-sign">
                <p>Sign in</p>
                <button className="" type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar