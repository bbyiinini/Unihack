import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import data from "../assets/userData.json";

class Signin extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     username: "",
  //     password: "",
  //     error: false
  //   };
  // }
  // onSubmit(ev) {
  //   ev.preventDefault();

  //   const { username, password } = this.state;

  //   this.setState({ error: false });

  //   if (!(username === "a" && password === "b")) {
  //     return this.setState({ error: true });
  //   }
  //   this.props.push("/home");
  // }
  // const newdata = data.map((data) => {
  //   return(

  //   )
  // })
  render() {
    return (
      <MDBRow>
        <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Log In</strong>
                </h3>
              </div>
              <MDBInput
                label="Your Name"
                group
                type="name"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <div className="text-center pt-3 mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Log In
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default Signin;
