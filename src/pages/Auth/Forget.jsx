import React from "react";
import Logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Forget = () => {
  const navigate = useNavigate();
  const handleLink = () => {
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
                <h1 className="weight-500">Forgot Password</h1>
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
                  <div className="action text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-md"
                      onClick={handleLink}
                    >
                      Send Link
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

export default Forget;
