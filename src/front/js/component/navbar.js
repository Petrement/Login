import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark py-2">
  <div className="container-fluid">
	<img src="https://www.pegasusone.com/wp-content/uploads/2015/08/fullstacklogo1-1.png" width="150px"></img>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mt-3 mt-lg-0 mb-3 mb-lg-0 me-4">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
		);
};