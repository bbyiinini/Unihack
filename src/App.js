import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forum from "./components/post/Forum";
import FindClassMate from "./components/FindClassMate";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Figure } from "react-bootstrap/";
import logo from "./assets/logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem("myLog") === "no" ? false : true
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    console.log(
      "refresh " + localStorage.getItem("myLog") + " " + this.state.loggedIn
    );
  }

  componentDidMount() {
    localStorage.setItem("myLog", this.state.loggedIn ? "yes" : "no");
  }

  toggleLogin() {
    this.setState({
      loggedIn: localStorage.getItem("myLog") === "no" ? false : true
    });
    console.log(
      "toggle " + localStorage.getItem("myLog") + " " + this.state.loggedIn
    );
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
                <div className="container">
                  <Figure.Image
                    style={{ marginTop: "-200px" }}
                    width={500}
                    height={500}
                    alt=""
                    src={logo}
                  />
                  <div
                    style={{
                      marginTop: "-100px",
                      textShadow: "1px 2px 8px rgb(83, 83, 83)",
                      fontSize: "17px",
                      fontFamily: "monospace",
                      color: "#FFF8DC"
                    }}
                  >
                    Find more study buddy with Little Chili !
                  </div>
                  <Container style={{ marginTop: "5px" }}>
                    <Row>
                      <Col xs={6} md={4}>
                        <Figure.Image
                          width={60}
                          height={60}
                          alt=""
                          src="https://image.flaticon.com/icons/svg/3382/3382663.svg"
                        />
                        <div
                          style={{
                            textShadow: "1px 2px 8px rgb(83, 83, 83)",
                            fontSize: "15px",
                            fontFamily: "monospace",
                            color: "#FFF8DC"
                          }}
                        >
                          <div>Tom</div>
                          <br></br>This website is amazing, the developers are
                          genius！
                        </div>
                      </Col>
                      <Col xs={6} md={4}>
                        <Figure.Image
                          width={60}
                          height={60}
                          alt=""
                          src="https://image.flaticon.com/icons/svg/3382/3382659.svg"
                        />
                        <div
                          style={{
                            textShadow: "1px 2px 8px rgb(83, 83, 83)",
                            fontSize: "15px",
                            fontFamily: "monospace",
                            color: "#FFF8DC"
                          }}
                        >
                          <div>Joyce</div>
                          <br></br>This website is helpful for finding
                          classmates.
                        </div>
                      </Col>
                      <Col xs={6} md={4}>
                        <Figure.Image
                          width={60}
                          height={60}
                          alt=""
                          src="https://image.flaticon.com/icons/svg/3382/3382669.svg"
                        />
                        <div
                          style={{
                            textShadow: "1px 2px 8px rgb(83, 83, 83)",
                            fontSize: "15px",
                            fontFamily: "monospace",
                            color: "#FFF8DC"
                          }}
                        >
                          <div>Dave</div>
                          <br></br>The discussions section allowed me post any
                          homework questions that I have.
                        </div>
                      </Col>
                    </Row>
                  </Container>
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
            </Route>
            <Route exact path="/forum" component={() => <Forum />} />
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
