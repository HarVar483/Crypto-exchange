import React, { useState } from "react";
import Footer from "../../commons/Footer";
import Header from "../../commons/Header";
import Sidebar from "../../commons/Sidebar";

import TermCondition from "./TermCondition";
import Privacy from "./Privacy";

const CmsIndex = () => {
  const [term, setTerm] = useState({
    type: "termcondition",
  });
  console.log("hh", term.type);
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="sub-title d-flex align-items-center mt-2">
                <h2 className="weight-500 d-flex align-items-center">
                  Customer Management System
                </h2>
              </div>
              <ul className="nav nav-tabs font-18 my-4">
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    class={`nav-link px-5 ${
                      term.type == "termcondition" ? "active" : undefined
                    }`}
                    data-toggle="tab"
                    role="tab"
                    onClick={() => setTerm({ type: "termcondition" })}
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="nav-item ml-4">
                  <a
                    style={{ cursor: "pointer" }}
                    class={`nav-link px-5 ${
                      term.type == "privacy" ? "active" : undefined
                    }`}
                    data-toggle="tab"
                    role="tab"
                    onClick={() => setTerm({ type: "privacy" })}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
              {term.type == "termcondition" ? <TermCondition /> : <Privacy />}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CmsIndex;
