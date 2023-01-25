import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="cover-container d-flex w-100 h-100 p-3 mx-auto">
			<img src="https://media.istockphoto.com/photos/cement-shelf-and-floor-on-concrete-background-for-design-picture-id1345203265?b=1&k=20&m=1345203265&s=612x612&w=0&h=u4Vs0oatELuy1jPR8sAVgBeQ6Y-I4x2gjRJCJ6Ra-ZU="></img>
  			<main className="px-2">
    		<h1>Cover your page.</h1>
   		 <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
    	 <p className="lead">
      		<a href="/login" className="btn btn-lg align-item-center btn-light fw-bold border-grey bg-grey">Login</a>
    	</p>
 		   </main>
		</div>
	);
};
