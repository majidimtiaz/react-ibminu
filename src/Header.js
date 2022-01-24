import React from "react";
import "./style.css";

export default function Header() {
  return (
      <header>
          <nav className="nav">
              <img src="./react-logo.png" className="nav-logo" ></img>
              <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
                </ul>
          </nav>
      </header>
  )
};