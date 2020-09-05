import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./components/post/Post";
import FindClassMate from "./components/FindClassMate";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: localStorage.getItem("myLog") || false };
    localStorage.clear();
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  componentDidMount() {
    localStorage.setItem("myLog", this.state.loggedIn);
  }

  toggleLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
    localStorage.setItem("myLog", this.state.loggedIn);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar
            loggedIn={this.state.loggedIn}
            toggleLogin={this.toggleLogin}
          />
          <Switch>
            <Route exact path="/">
              <div className={"wrapper"}>
                <div className="container"></div>
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
            </Route>
            <Route exact path="/forum" component={() => <Post />} />
            <Route
              exact
              path="/findclassmate"
              component={() => <FindClassMate />}
            />
            <Route exact path="/signup" component={() => <Signup />} />
            <Route
              exact
              path="/login"
              component={() => <Signin toggleLogin={this.toggleLogin} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
