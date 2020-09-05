import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forum from "./components/post/Forum";
import FindClassMate from "./components/FindClassMate";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Image, Row, Figure } from "react-bootstrap/";
import logo from "./assets/logo.png";

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

  componentWillUnmount() {
    localStorage.clear();
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
                <div className="container">
                  <Figure.Image width={200} height={200} alt="" src={logo} />
                  <div
                    style={{
                      textShadow: "1px 2px 8px rgb(83, 83, 83)",
                      fontSize: "15px",
                      fontFamily: "monospace",
                      color: "#FFF8DC"
                    }}
                  >
                    Find more study buddy with Little Chill !
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
                          <br></br>I really like this Website!
                        </div>
                      </Col>
                      <Col xs={6} md={4}>
                        <Figure.Image
                          width={60}
                          height={60}
                          alt=""
                          src="https://image.flaticon.com/icons/svg/3382/3382659.svg"
                        />
                        <div>
                          <div>Tom</div>
                          <br></br>I really like this Website!
                        </div>
                      </Col>
                      <Col xs={6} md={4}>
                        <Figure.Image
                          width={60}
                          height={60}
                          alt=""
                          src="https://image.flaticon.com/icons/svg/3382/3382669.svg"
                        />
                        <div>
                          <div>Tom</div>
                          <br></br>I really like this Website!
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  {/* <ul>
                    <image src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/18/15/billgates.jpg/" />
                    <image src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/18/15/billgates.jpg/" />
                    <image src="https://gray-ktuu-prod.cdn.arcpublishing.com/resizer/2UgCkL8UmHZsbn-NlDQ4yeW89H0=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/KEDSRN6KSJPA3OX6PL6HHNV5TI.jpg/180x180" />
                  </ul> */}
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
