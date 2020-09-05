import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signin = (props) => {
  const [password, setPassword] = useState("");
  const [Id, setId] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const history = useHistory();

  const login = () => {
    localStorage.setItem("myLog", "yes");
  };

  const signin = (e) => {
    e.preventDefault();
    if (password !== "123" || Id !== "admin") {
      alert("User Name or Password Wrong!");
    } else {
      setSignedIn(true);
      login();
      setTimeout(() => {
        history.push("/");
        props.toggleLogin();
      }, 1000);
    }
  };

  const passChange = (e) => {
    setPassword(e.target.value);
  };

  const IdChange = (e) => {
    setId(e.target.value);
  };

  return (
    <>
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
            <button id="login-button" onClick={signin}>
              Login
            </button>
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
