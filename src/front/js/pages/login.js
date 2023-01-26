import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const navigate = useNavigate;
  const token = sessionStorage.getItem("token");

  const handleClick = () => {
    actions.login(email, passWord);
  };

  return (
    <div className="form-signin d-flex justify-content-center w-100 m-auto">
        <form>
    <img className="mt-4" src="https://www.pegasusone.com/wp-content/uploads/2015/08/fullstacklogo1-1.png" width="300"></img>
    <h3 clasName="h3 mb-3 fw-normal">Please sign in</h3>

    <div className="form-floating">
      <input type="email" 
      class="form-control" 
      placeholder="email"
      value={email}
      onChange={(evt) => setEmail(evt.target.value)}>
      </input>
      <label for="floatingInput">Email address</label>
    </div>
  

    <div className="form-floating">
      <input type="password" 
      class="form-control" 
      placeholder="Password"
      value={passWord}
      onChange={(evt) => setpassWord(evt.target.value)}></input>
      <label for="floatingPassword">Password</label>
    </div>
    
      <div className="alert alert-info">
            {store.message ||
              "Loading message from the backend"}
      </div>
  
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  </div>
  );

};