import React from "react";
import Footer from "../../commons/Footer";
import Header from "../../commons/Header";
import Sidebar from "../../commons/Sidebar";
import ArrowIcon from "../../../src/assets/images/icons/back-arrow.svg";
import { useNavigate } from "react-router-dom";

const AddFee = () => {
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
                <h2 className="weight-500 d-flex align-items-center">
                  <a className="d-flex align-items-center mr-3">
                    <img src={ArrowIcon} onClick={() => navigate("/fee")} />
                  </a>{" "}
                  Add Fee
                </h2>
              </div>
              <div className="card card-table round mt-3">
                <div className="table-responsive mb-5">
                  <table className="table table-striped table-borderless text-black mb-0 lh-lg">
                    <thead>
                      <tr>
                        <th className="py-4 font-24 weight-700">
                          <div className="weight-500">Fee Details</div>
                        </th>
                        <th />
                      </tr>
                    </thead>
                  </table>
                  <div className="bg-gray p-4 rounded-bottom-lg">
                    <form action="fees-management.php">
                      <div className="form-group row mb-2">
                        <label
                          htmlFor
                          className="col-sm-2 col-form-label font-18 weight-500"
                        >
                          Mode
                        </label>
                        <div className="col-sm-10">
                          <select className="form-control lg rounded-md border-0 font-20 bg-white">
                            <option value={1}>option 1</option>
                            <option value={2}>option 2</option>
                            <option value={3}>option 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                        <label
                          htmlFor
                          className="col-sm-2 col-form-label font-18 weight-500"
                        >
                          Type
                        </label>
                        <div className="col-sm-10">
                          <select className="form-control lg rounded-md border-0 font-20 bg-white">
                            <option value={1}>option 1</option>
                            <option value={2}>option 2</option>
                            <option value={3}>option 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                        <label
                          htmlFor
                          className="col-sm-2 col-form-label font-18 weight-500"
                        >
                          Amount
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control lg rounded-md border-0 font-20"
                            id
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                        <label
                          htmlFor
                          className="col-sm-2 col-form-label font-18 weight-500"
                        />
                        <div className="col-sm-10">
                          <button
                            type="submit"
                            className="btn btn-primary py-3 rounded-md font-18 col-sm-2"
                            onClick={() => navigate("/fee")}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
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

export default AddFee;
