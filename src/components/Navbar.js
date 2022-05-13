import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyIyXFKLPZCsXTPWCYa98B4lZBsYrnb6d1w&usqp=CAU"
            alt="cocktail db logo"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

