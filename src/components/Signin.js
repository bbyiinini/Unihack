import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signin = (props) => {
  const [password, setPassword] = useState("");
  const [Id, setId] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const history = useHistory();

  const signin = (e) => {
    // const history = useHistory()
    e.preventDefault();
    if (password !== "123" || Id !== "admin") {
      alert("User Name or Password Wrong!");
    } else {
      setSignedIn(true);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }
  };

  const passChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const IdChange = (e) => {
    setId(e.target.value);
    console.log(password);
  };

  return (
    <>
      {" "}
      <div className={signedIn ? "wrapper form-success" : "wrapper"}>
        <div className="container">
          <h1> {signedIn ? "Welcome " : "Sign In"} </h1>
          <form className={signedIn ? "fadeOut" : "form"}>
            <input
              type="text"
              placeholder="Username"
              onChange={IdChange}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={passChange}
            ></input>
            {/* <Link to="/home"> */}
            <button id="login-button" onClick={signin}>
              Sign in
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
