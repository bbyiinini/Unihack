import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Signup = () => {
  const [signedIn, setSignedIn] = useState(false);

  const signup = () => {
    setSignedIn(true);
  };

  return (
    <>
      <div className={signedIn ? "wrapper form-success" : "wrapper"}>
        <div className="container">
          <h1> {signedIn ? "Welcome " : "Sign Up"} </h1>
          <form className={signedIn ? "fadeOut(500)" : "form"}>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Phone"></input>
            <input type="text" placeholder="Classes"></input>
            <input type="password" placeholder="Password"></input>
            {/* <Link to="/home"> */}
            <button id="login-button" onClick={signup}>
              Login
            </button>
            {/* </Link> */}
          </form>
        </div>
        <ul class="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Signup;
