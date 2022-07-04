import React, { useRef, useState } from "react";
import Header from "../../commons/Header";
import Footer from "../../commons/Footer";
import Sidebar from "../../commons/Sidebar";
import { useNavigate } from "react-router-dom";

import FeeTable from "../../components/Tables/Fee/FeeTable";

const Fee = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="sub-title d-flex align-items-center mt-2">
                <h2 className="weight-500">Fees Management</h2>
                <div className="ml-auto">
                  <a
                    onClick={() => navigate("/addfee")}
                    className="btn btn-primary rounded-md font-18"
                    style={{ color: "white" }}
                  >
                    Add Fee
                  </a>
                </div>
              </div>
              <div className="search-bar d-flex align-items-center justify-content-between mb-4"></div>
              <div className="card card-table round">
                <FeeTable />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fee;
