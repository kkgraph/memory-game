import React from 'react';
import './Nav.css';

function Nav({ message, score, topScore }) {
    return (
      <nav className="navbar sticky-top navbar-dark bg-info p-0 tp-text">
        <ul className="row center list-inline m-0 nav-fill nav-height nav-width">
          <li className="col list-inline-item my-auto nav-calc-font p-0 m-0 text-center">
            <a className="nav-calc-font navbar-brand p-3 m-0" href="/">
              <h1>Dog Memory Game</h1>
            </a>
          </li>
          <li
            className="col list-inline-item my-auto m-10 p-10 text-center text-light"
          >
            <h2>{message}</h2>
          </li>
          <li className="nav-calc-font navbar-brand p-3 m-0">
            <h2> Points: {score} | Top Points: {topScore}</h2>
          </li>
        </ul>
      </nav>
    );
  }
export default Nav;
