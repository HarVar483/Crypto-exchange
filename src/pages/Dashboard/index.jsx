import React from "react";
import Sidebar from "../../commons/Sidebar/index";
import Header from "../../commons/Header/index";
import Footer from "../../commons/Footer";
import Chart from "../../commons/Chart/Chart";

const Dashboard = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />

          <div className="main-panel">
            <div className="content-wrapper">
              <h2 className="weight-500 mt-2">Welcome Admin</h2>
              <div className="row mt-4">
                <div className="col-md-3 stretch-card grid-margin">
                  <div className="card card-img-holder text-white bg-primary p-3">
                    <div className="card-body text-center">
                      <div className="round-count bg-white rounded-pill text-black">
                        248
                      </div>
                      <div className="font-20 mt-2">Total Users</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 stretch-card grid-margin">
                  <div className="card card-img-holder text-white bg-primary p-3">
                    <div className="card-body text-center">
                      <div className="round-count bg-white rounded-pill text-black">
                        8.9k
                      </div>
                      <div className="font-20 mt-2">Total Revenue ($)</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 stretch-card grid-margin">
                  <div className="card card-img-holder text-white bg-primary p-3">
                    <div className="card-body text-center">
                      <div className="round-count bg-white rounded-pill text-black">
                        542
                      </div>
                      <div className="font-20 mt-2">Total Crypto Exchange</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 stretch-card grid-margin">
                  <div className="card card-img-holder text-white bg-primary p-3">
                    <div className="card-body text-center">
                      <div className="round-count bg-white rounded-pill text-black">
                        10
                      </div>
                      <div className="font-20 mt-2">Total Coins</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-12">
                  <div className="row h-100">
                    <div className="col-md-12 stretch-card grid-margin flex-fill">
                      <div className="card card-img-holder text-dark bg-gray p-3 shadow-sm">
                        <div className="card-body text-center pb-0 px-0">
                          {/* <canvas id="myChart2" height={110} /> */}
                          <Chart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <Footer />
          </div>
        </div>

        <div className="modal fade" id="rejectModal" tabIndex={-1}>
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row d-flex justify-content-between align-items-center pb-2 border-bottom mb-3 mx-n3 px-3">
                  <h5 className="modal-title weight-400">Modal title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" className=" weight-400">
                      ×
                    </span>
                  </button>
                </div>
                <form>
                  <div className="form-group">
                    <label>Reject Reason</label>
                    <select className="form-control font-14 rounded-pill">
                      <option value>1</option>
                      <option value>2</option>
                      <option value>3</option>
                    </select>
                  </div>
                  <div className="text-center row justify-content-center mx-0 mb-2">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm rounded-pill mx-1 py-2 px-4"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm rounded-pill mx-1 py-2 px-4"
                    >
                      Save
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

export default Dashboard;
