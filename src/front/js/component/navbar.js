import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg .bg-dark-subtle">
		<div className="container-fluid">
		<img src="https://images-platform.99static.com/XzzJBjIObP5KhDx9MUfD0ulacXo=/500x500/top/smart/99designs-contests-attachments/28/28810/attachment_28810462" width="100px"></img>
		  <a className="navbar-brand">FULLSTACK</a>
		  <div className="collapse navbar-collapse" id="navbarNav">
			<ul className="nav justify-content-end">
			  <li className="nav-item">
				<a className="nav-link active" aria-current="page" href="/home">Home</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="/login">Login</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>);
};