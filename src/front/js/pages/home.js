import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="cover-container d-flex justify-content-center w-100 h-100 p-3 mx-auto">
  			<main className="px-4">
    		<h1>The Begining of Your New Career</h1>
   		 <h3 className="lead">Need a change? Want to learn to code from scratch?</h3>
		 <h6>Welcome, you are not the first nor will you be the last. Just sign in and begin.</h6>
    	 <p className="lead">
      		<a href="/login" className="btn btn-lg align-item-center btn-dark fw-bold border-black bg-black">Login</a>
    	</p>
 		   </main>
		</div>
	
	);
};
