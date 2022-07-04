import React, { useRef, useState } from "react";
import Minus from "../../../assets/images/icons/minus.svg";
import Plus from "../../../assets/images/icons/plus.svg";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import Modal from "../../../commons/Modal/Modal";
const FeeTable = () => {
  const pagination = useRef();
  const navigate = useNavigate();

  const [showHome, setShowHome] = useState({
    value: false,
    id: "",
    type: "",
  });
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-borderless text-black mb-0">
          <thead>
            <tr>
              <th className="py-4">Mode</th>
              <th className="py-4">Type</th>
              <th className="py-4">Amount</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Transfer</td>
              <td>Send/Received</td>
              <td>
                <div className="d-flex align-items-center plus-minus">
                  <span
                    className="button mr-n2"
                    data-name="minus"
                    role="button"
                  >
                    <img src={Minus} />
                  </span>
                  <input
                    className="form-control col-2 border-0 text-center px-0 font-16 mx-2 bg-transparent amount"
                    defaultValue="0.2"
                  />
                  <span
                    className="button ml-n2 add"
                    data-name="plus"
                    role="button"
                  >
                    <img src={Plus} />
                  </span>
                </div>
              </td>
              <td>
                <label className="switchbox green sm d-inline--flex align-items-center justify-content-center mb-0">
                  <input
                    type="checkbox"
                    className="switch"
                    onClick={() => setShowHome({ value: true, type: "enable" })}
                    data-target="#edModal"
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Coins</td>
              <td>Buy/Sell</td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="minus mr-n2" role="button">
                    <img src={Minus} />
                  </span>
                  <input
                    className="form-control col-2 border-0 text-center px-0 font-16 mx-2 bg-transparent"
                    disabled
                    defaultValue="$0.2"
                  />
                  <span className="plus ml-n2" role="button">
                    <img src={Plus} />
                  </span>
                </div>
              </td>
              <td>
                <label className="switchbox green sm d-inline--flex align-items-center justify-content-center mb-0">
                  <input
                    type="checkbox"
                    className="switch"
                    data-toggle="modal"
                    data-target="#edModal"
                    onClick={() => setShowHome({ value: true, type: "enable" })}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Banking</td>
              <td>Deposit/Withdraw</td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="minus mr-n2" role="button">
                    <img src={Minus} />
                  </span>
                  <input
                    className="form-control col-2 border-0 text-center px-0 font-16 mx-2 bg-transparent"
                    disabled
                    defaultValue="$0.2"
                  />
                  <span className="plus ml-n2" role="button">
                    <img src={Plus} />
                  </span>
                </div>
              </td>
              <td>
                <label className="switchbox green sm d-inline--flex align-items-center justify-content-center mb-0">
                  <input
                    type="checkbox"
                    className="switch"
                    // data-toggle="modal"
                    onClick={() => setShowHome({ value: true, type: "enable" })}
                    data-target="#edModal"
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>Hazel Card</td>
              <td>Pay</td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="minus mr-n2" role="button">
                    <img src={Minus} />
                  </span>
                  <input
                    className="form-control col-2 border-0 text-center px-0 font-16 mx-2 bg-transparent"
                    disabled
                    defaultValue="$0.2"
                  />
                  <span className="plus ml-n2" role="button">
                    <img src={Plus} />
                  </span>
                </div>
              </td>
              <td>
                <label className="switchbox green sm d-inline--flex align-items-center justify-content-center mb-0">
                  <input
                    type="checkbox"
                    className="switch"
                    data-toggle="modal"
                    data-target="#edModal"
                    onClick={() => setShowHome({ value: true, type: "enable" })}
                  />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-md-flex align-items-center justify-content-between mt-3">
        <div className="font-14 weight-500 text-gray">10 Results Per Page</div>
        <ReactPaginate
          ref={pagination}
          pageCount={Math.ceil(613 / 25)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          // onPageChange={setPage}
          containerClassName="pagination"
          activeClassName="active"
          pageLinkClassName="page-link"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          pageClassName="page-item"
          breakClassName="page-item"
          nextClassName="page-item"
          previousClassName="page-item"
          previousLabel={<>&laquo;</>}
          nextLabel={<>&raquo;</>}
        />
      </div>

      <Modal
        show={showHome.value}
        onClose={() => setShowHome({ value: false })}
      >
        <div className="" id="faq-delete-modal">
          <div class="modal-body py-5 my-2 text-center">
            <h3 class="weight-600">
              {showHome.type == "delete"
                ? "Are you sure want to Delete this user?"
                : "Are you sure want to Enable this user?"}
            </h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <div class="text-center row justify-content-center mx-0 mt-5">
              <a
                type="button"
                href
                className="btn btn-secondary rounded-md mx-1 col-sm-4 font-16 py-3"
                onClick={() => setShowHome(false)}
              >
                Cancel
              </a>
              <a
                type="button"
                href
                className={`btn btn-${
                  showHome.type == "enable" ? "primary" : "danger"
                } rounded-md mx-1 col-sm-4 font-16 py-3`}
                style={{ color: "white" }}
              >
                {showHome.type == "enable" ? "Enable" : "Delete"}
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FeeTable;
