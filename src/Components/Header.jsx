import React, { useState } from "react";
import "./Header.css";
import logo from "../../src/Assets/logo.png";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="left-header">
        <a href="/">
          <img src={logo} alt="" className="logo" />
        </a>
      </div>
      <div className="right-header">
        <nav className={`${open ? "open" : ""}`}>
          <a href="About" className="nav-links">
            ABOUT
          </a>
          <a href="Blueprint" className="nav-links">
            BLUEPRINT
          </a>
          <a href="Artist" className="nav-links">
            ARTIST
          </a>
          <a href="Giveaways" className="nav-links">
            GIVEAWAYS
          </a>
          <a href="Team" className="nav-links">
            TEAM
          </a>
          <a href="Faq" className="nav-links">
            FAQ's
          </a>
          <a href="https://meta-tattoo-club.gitbook.io/" target="_blank" className="nav-links">
            DOCS
          </a>
          <a href="#" className="nav-links">
            MINT
          </a>
          <a href="https://twitter.com/metatattooclub" className="nav-links social">
            <p>TWITTER</p>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://discord.gg" className="nav-links social">
            <p>DISCORD</p>
            <i className="fab fa-discord"></i>
          </a>
        </nav>

        <button
          className={`burger ${open ? "active" : ""}`}
          onClick={() => {
            setOpen((prev) => {
              return !prev;
            });
          }}
        ></button>
      </div>
    </div>
  );
}

export default Header;
