import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import data from "../assets/userData.json";

const Signin = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const signin = () => {
    if (password !== "123") {
      alert("incorrect");
    } else {
      setSignedIn(true);
      props.toggleLogin();
    }
  };

  const passChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  return (
    <>
      {" "}
      <div className={signedIn ? "wrapper form-success" : "wrapper"}>
        <div className="container">
          <h1> {signedIn ? "Welcome " : "Sign In"} </h1>
          <form className={signedIn ? "fadeOut(500)" : "form"}>
            <input type="text" placeholder="Username"></input>
            <input
              type="password"
              placeholder="Password"
              onChange={passChange}
            ></input>
            {/* <Link to="/home"> */}
            <button id="login-button" onClick={signin}>
              Login
            </button>
            {/* </Link> */}
          </form>
        </div>
        <ul className="bg-bubbles">
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

export default Signin;
