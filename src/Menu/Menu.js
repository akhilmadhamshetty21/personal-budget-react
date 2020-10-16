import React from 'react';
import {
    Link
  } from "react-router-dom";
function Menu() {
  return (
    <div class="menu">
      <header>
        <ul>
          <li><Link to="/" title="Homepage">Home</Link></li>
          <li><Link to="/about" title="about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default Menu;
