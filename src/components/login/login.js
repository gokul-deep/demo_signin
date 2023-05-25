import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const signIn = () => {
    navigate("/home");
  };
  return (
    <div className="login d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="login-section">
              <h2 className="title">Sign In</h2>
              <h6>
                New user? <a href="">Create an account</a>
              </h6>
              <form action="">
                <div className="mb-3">
                  <input
                    className="form-input"
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Username or email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="form-input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3 d-flex">
                  <input
                    className="keepSignedIn"
                    type="checkbox"
                    name="keepSignedIn"
                    id="keepSignedIn"
                  />
                  <h5 className="m-0 ms-2 signedIn">Keep me signed in</h5>
                </div>
                <button type="button" className="btn-signIn" onClick={signIn}>
                  Sign In
                </button>

                <div className="my-3 d-flex justify-content-center">
                  <h6 className="title-small">Or Sign In With</h6>
                </div>
                <div className="icons d-flex justify-content-center">
                  <i class="fa-brands fs-3 me-5 fa-google"></i>
                  <i class="fa-brands fs-3 me-5 fa-facebook"></i>
                  <i class="fa-brands fs-3 me-5 fa-linkedin"></i>
                  <i class="fa-brands fs-3 fa-square-twitter"></i>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-section d-none d-md-block">
              <div className="image d-flex justify-content-center">
                <img src="../../../images/Illustration.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
