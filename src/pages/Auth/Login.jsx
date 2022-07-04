import React from "react";
import Logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSign = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="container-fluid page-body-wrapper full-page-wrapper login-bg bg-white">
        <div className="row flex-grow">
          <div className="loginLeft align-items-center justify-content-center p-0 d-none d-md-flex col bg-primary">
            <div className="text-center">
              <img src={Logo} height={250} />
              <h1 className="my-0 text-white">Hazel</h1>
            </div>
          </div>
          <div className="loginRight">
            <div>
              <div className="brand-logo text-center mb-4 mb-md-5 pb-md-4">
                <h1 className="weight-500">Sign In</h1>
                <div className="font-22 weight-300">
                  Lorem ipsum dolar sit amet, consetetur
                </div>
              </div>
              <div className="auth-form-light text-left pb-md-0">
                <form action="<?php echo $host ?>/dashboard.php">
                  <div className="form-group md">
                    <label className="font-20 ml-3 mb-3">Email Address</label>
                    <input
                      type="email"
                      className="form-control md weight-400"
                      id
                    />
                  </div>
                  <div className="form-group md password-field mb-2">
                    <label className="font-20 ml-3 mb-3">Password</label>
                    <div className="position-relative">
                      <input
                        type="password"
                        className="form-control md unlock-icon weight-400"
                        id
                      />
                      <i className="showPassword" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-4 mb-5">
                    <label className="checkbox-lg my-0" role="button">
                      <input type="checkbox" className="d-none" />
                      <em /> Remember Password
                    </label>
                    <Link to="/forget" className="text-gray weight-400 ml-auto">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="action text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-md"
                      onClick={handleSign}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
