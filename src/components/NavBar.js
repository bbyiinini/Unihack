import React from "react";
import Modal from "react-modal";
import {
  Navbar,
  Nav,
  DropdownButton,
  Button,
  Popover,
  Dropdown,
  OverlayTrigger,
  Card
} from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

Modal.setAppElement("#root");

const NavBar = (props) => {
  const logout = () => {
    localStorage.setItem("myLog", "no");
    props.toggleLogin();
    console.log(props);
  };

  const popover = (
    <Popover id="popover-basic">
      <Card>
        <Card.Img
          variant="top"
          src="https://www.flaticon.com/premium-icon/icons/svg/3373/3373540.svg"
        />
        <Card.Body>
          <Card.Title>Admin</Card.Title>
          <Card.Text>This is Admin account</Card.Text>
          <Button variant="warning" onClick={logout}>
            Logout
          </Button>
        </Card.Body>
      </Card>
    </Popover>
  );

  return (
    <>
      <Navbar expand="lg" fixed="top">
        {/* <img src={logo} width="40" height="40" alt="/" /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link variant="" href="/">
              <img
                src="https://image.flaticon.com/icons/svg/2948/2948210.svg"
                width="20"
                height="20"
                alt=""
                style={{ marginTop: "10px" }}
                // onMouseOver={showText("lalala")}
                // onMouseOut={showText("")}
              />
              <div className="barfont"> Home </div>
            </Nav.Link>
            <Nav.Link variant="" href="/findclassmate">
              <img
                src="https://image.flaticon.com/icons/svg/1206/1206404.svg"
                width="20"
                height="20"
                alt=""
                style={{ marginTop: "10px" }}
              />
              <div className="barfont">Friends</div>
            </Nav.Link>
            <Nav.Link variant="" href="/forum">
              <img
                src="https://image.flaticon.com/icons/svg/1756/1756645.svg"
                width="20"
                height="20"
                alt=""
                style={{ marginTop: "10px" }}
              />
              <div className="barfont">Discuss</div>
            </Nav.Link>
          </Nav>
          {props.loggedIn ? (
            <OverlayTrigger
              trigger="focus"
              placement="left-end"
              overlay={popover}
            >
              <Button
                style={{
                  // textShadow: "1px 2px 8px rgb(83, 83, 83)",
                  fontSize: "15px",
                  fontFamily: "monospace",
                  color: "#FFFAF0"
                }}
                variant="warning"
              >
                My Account
              </Button>
            </OverlayTrigger>
          ) : (
            <>
              <DropdownButton
                variant="outline-warning"
                title="Login&Signup"
                id="bg-nested-dropdown"
              >
                <Dropdown.Item eventKey="1" href="/login">
                  Login
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" href="/signup">
                  Signup
                </Dropdown.Item>
              </DropdownButton>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
