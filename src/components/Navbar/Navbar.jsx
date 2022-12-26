import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3 ?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);
const Sign = () => (
  <>
    <p>Sign in</p>
    <button type="button">Sign Up</button>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="links">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container">
          <Menu />
        </div>
      </div>
      <div className="sign">
        <Sign />
      </div>
      <div className="menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="menu-container scale-up-center">
              <Menu />
              <div className="sign">
                <Sign />
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
