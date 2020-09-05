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
  Col,
  Image
} from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

Modal.setAppElement("#root");
const NavBar = (props) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

  const logout = () => {
    props.toggleLogin();
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Col xs={6} md={4}>
          <Image src="../logo.png/5x5" roundedCircle />
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/findclassmate">FindClassmate</Nav.Link>
            <Nav.Link href="/forum">Forum</Nav.Link>
          </Nav>
          {props.loggedIn ? (
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Button variant="danger" onClick={logout}>
                Click me to see
              </Button>
            </OverlayTrigger>
          ) : (
            <>
              {/* <Button
                variant="outline-success"
                //href="/Signin"
                onClick={() => props.toggleLogin()}
              >
                Login
              </Button> */}
              <DropdownButton
                variant="outline-danger"
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
