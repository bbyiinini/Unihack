import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter
} from "mdbreact";

class signup extends React.Component {
  render() {
    const smallStyle = { fontSize: "0.8rem" };
    return (
      <MDBRow>
        <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign Up</strong>
                </h3>
              </div>
              <MDBInput
                label="Your Name"
                id="new_name"
                group
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Phone Number"
                id="new_number"
                group
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your Password"
                id="new_password"
                group
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your Class"
                id="new_class"
                group
                validate
                error="wrong"
                success="right"
              />
              <div className="text-center pt-3 mb-3">
                <MDBBtn
                  id="new_signup"
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  href="/"
                >
                  Sign up
                  {/* can't save sign up data due to backend */}
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p
                className="grey-text d-flex justify-content-end"
                style={smallStyle}
              >
                Already a member?{" "}
                <a href="/login" className="blue-text ml-1">
                  {" "}
                  Sign In
                </a>
              </p>
            </MDBModalFooter>
            <p>Signup function not availible due to lack of backend</p>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default signup;
