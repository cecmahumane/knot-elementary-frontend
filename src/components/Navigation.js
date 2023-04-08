import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

export  const Navigation = () => {
  return (
    <nav>
      <div class="logo-container">
        <Link to=".">
          <img src="/images/logo.png" alt="logo" />
          <span class="logo-text">Meeting W/ Emma</span>
        </Link>
      </div>
      <div class="nav-links-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div class="nav-btns-container">
        <Link to="/login">
          <LoginButton></LoginButton>
        </Link>
        <Link to="/signup">
          <LoginButton></LoginButton>
        </Link>
      </div>
    </nav>
  );
}