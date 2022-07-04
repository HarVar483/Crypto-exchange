import React, { useState } from "react";
import Header from "../../commons/Header";
import Footer from "../../commons/Footer";
import Sidebar from "../../commons/Sidebar";
import ArrowIcon from "../../../src/assets/images/icons/back-arrow.svg";
import EditIcon from "../../../src/assets/images/icons/ellipsis-v.svg";

import { useNavigate } from "react-router-dom";

const CustomerInfo = () => {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);
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
                  <a className="d-flex align-items-center mr-3">
                    <img
                      src={ArrowIcon}
                      onClick={() => navigate("/customer")}
                      style={{cursor:"pointer"}}
                    />
                  </a>{" "}
                  Customer Info
                </h2>
              </div>
              <div className="card card-table round mt-3">
                <div className="table-responsive mb-5">
                  <table className="table table-striped table-borderless text-black mb-0 lh-lg">
                    <thead>
                      <tr>
                        <th className="py-4 font-24 weight-700" colSpan={3}>
                          <div className="weight-500">Personal Details</div>
                        </th>
                        <th className="py-3">
                          <div className="d-flex justify-content-end pr-2 dropdown">
                            <span
                              className="p-2 d-block"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <img
                                src={EditIcon}
                                onClick={() => setShowDropDown(!showDropDown)}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                            {showDropDown && 
                            <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                             onClick={()=>navigate("/editcustomer")}
                            >
                              Edit
                            </a>
                          </div>}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="font-18">
                        <td>Name</td>
                        <td>Phone Number</td>
                        <td>Email Address</td>
                        <td>Address</td>
                      </tr>
                      <tr className="font-22">
                        <td>Carl Harper</td>
                        <td>+11 9876543210</td>
                        <td>abcxyz@random.com</td>
                        <td>Caledonia, Illinois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive mb-5">
                  <table className="table table-striped table-borderless text-black mb-0 lh-lg">
                    <thead>
                      <tr>
                        <th className="py-4 font-24 weight-700" colSpan={3}>
                          <div className="weight-500">Banking Details</div>
                        </th>
                        <th className="py-4" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="font-18">
                        <td>Card Number</td>
                        <td>Wallet Balance</td>
                        <td>Routing No.</td>
                        <td>Account No.</td>
                      </tr>
                      <tr className="font-22">
                        <td>XXXX XXXX XXXX 6572</td>
                        <td>$150.24</td>
                        <td>041 215 663</td>
                        <td>041 273 372 923</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive mb-5">
                  <table className="table table-striped right-striped table-borderless text-black mb-0 lh-lg">
                    <thead>
                      <tr>
                        <th className="py-4 font-24 weight-700">
                          <div className="weight-500">
                            Coins Balance Details
                          </div>
                        </th>
                        <th className="py-4" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="50%">
                          <div className="d-flex align-items-center">
                            <span>Bitcoin</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>Cardanao</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>Ethereum</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>Tether</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>Solana</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>XRP/Ripple</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>Polkadot</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>Dogecoin</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>SHIB</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span>Avalanche</span>
                            <span>$150.24</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive mb-5">
                  <table className="table table-striped table-borderless text-black mb-0 lh-lg">
                    <thead>
                      <tr>
                        <th className="py-4 font-24 weight-700" colSpan={5}>
                          <div className="weight-500">Activities</div>
                        </th>
                        <th className="py-4" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="font-18 weight-500">
                        <td>Mode</td>
                        <td>Type</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Amount</td>
                        <td>Date &amp; Time</td>
                      </tr>
                      <tr>
                        <td>Banking</td>
                        <td>Deposit</td>
                        <td>ATM</td>
                        <td>—</td>
                        <td>$100</td>
                        <td>23 Feb, 02:10 pm</td>
                      </tr>
                      <tr>
                        <td>Hazel Card</td>
                        <td>Pay</td>
                        <td />
                        <td>Starbucks</td>
                        <td>$100</td>
                        <td>23 Feb, 02:10 pm</td>
                      </tr>
                      <tr>
                        <td>Transfer</td>
                        <td>Send</td>
                        <td>Me</td>
                        <td>Peter Stevenson</td>
                        <td>$100</td>
                        <td>23 Feb, 02:10 pm</td>
                      </tr>
                      <tr>
                        <td>Transfer</td>
                        <td>Received</td>
                        <td>Lisa Yates</td>
                        <td>Me</td>
                        <td>$100</td>
                        <td>23 Feb, 02:10 pm</td>
                      </tr>
                      <tr>
                        <td>Banking</td>
                        <td>Deposit</td>
                        <td>ATM</td>
                        <td>—</td>
                        <td>$100</td>
                        <td>23 Feb, 02:10 pm</td>
                      </tr>
                      <tr>
                        <td>Coins</td>
                        <td>Sell</td>
                        <td>Wallet</td>
                        <td>Tether</td>
                        <td>$100</td>
                        <td>23 Feb, 02:10 pm</td>
                      </tr>
                      <tr>
                        <td>Coins</td>
                        <td>Sell</td>
                        <td>Wallet</td>
                        <td>Tether</td>
                        <td>$100</td>
                        <td>23 Feb, 02:10 pm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        {/* Delete Modal */}
        <div className="modal fade" id="deleteModal" tabIndex={-1}>
          <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content rounded-lg">
              <div className="modal-body py-5 my-2 text-center">
                <h3 className="weight-600">
                  Are you sure want to Delete this user?
                </h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                <div className="text-center row justify-content-center mx-0 mt-5">
                  <button
                    type="button"
                    className="btn btn-secondary rounded-md mx-1 col-sm-4 font-16 py-3"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a
                    href
                    className="btn btn-danger rounded-md mx-1 col-sm-4 font-16 py-3"
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Enable/Disabled Modal */}
        <div className="modal fade" id="edModal" tabIndex={-1}>
          <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content rounded-lg">
              <div className="modal-body py-5 my-2 text-center">
                <h3 className="weight-600">
                  Are you sure want to Enable this user?
                </h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                <div className="text-center row justify-content-center mx-0 mt-5">
                  <button
                    type="button"
                    className="btn btn-secondary rounded-md mx-1 col-sm-4 font-16 py-3"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a
                    href
                    className="btn btn-primary rounded-md mx-1 col-sm-4 font-16 py-3"
                  >
                    Enable
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*?php include ('includes/footer-files.php'); ?*/}
        {/*?php include ('includes/footer.php'); ?*/}
      </div>
    </>
  );
};

export default CustomerInfo;
