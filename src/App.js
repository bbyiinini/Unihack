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
    this.state = { loggedIn: false };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
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
              <div>
                <h1>Hello World</h1>
                <h2>Start editing to see some magic happen!</h2>
              </div>
            </Route>
            <Route exact path="/forum" component={() => <Post />} />
            <Route
              exact
              path="/findclassmate"
              component={() => <FindClassMate />}
            />
            <Route exact path="/signup" component={() => <Signup />} />
            <Route exact path="/login" component={() => <Signin />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
