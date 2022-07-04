import React, { useRef, useState } from "react";
import eye from "../../../assets/images/icons/eye.svg";
import ReactPaginate from "react-paginate";
import DeleteIcon from "../../../assets/images/icons/delete.svg";
import { useNavigate } from "react-router-dom";
import Modal from "../../../commons/Modal/Modal";

const CustomerTable = () => {
  const pagination = useRef();
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState({ value: false, id: "", type: "" });
  const [showHome, setShowHome] = useState({
    value: false,
    id: "",
    type: "",
  });
  return (
    <>
      <div className="sub-title d-flex align-items-center mt-2">
        <h2 className="weight-500">Manage Customer</h2>
        <div className="search col-sm-4 ml-auto">
          <form>
            <div className="form-group my-0">
              <input
                className="form-control search-icon"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
      <div className="search-bar d-flex align-items-center justify-content-between mb-4"></div>
      <div className="table-responsive">
        <table className="table table-striped table-borderless text-black mb-0">
          <thead>
            <tr>
              <th className="py-4">S.no</th>
              <th className="py-4">Name</th>
              <th className="py-4">Phone Number</th>
              <th className="py-4">Email Address</th>
              <th className="py-4">Address</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10</td>
              <td>Alonzo Daniels</td>
              <td>+11 9876543210</td>
              <td>abcxyz@random.com</td>
              <td>San Leandro, California</td>
              <td>
                <div className="action">
                  <a>
                    <img
                      src={eye}
                      width={20}
                      onClick={() => navigate("/customerinfo")}
                    />
                  </a>
                  <a>
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                  <label className="switchbox green sm d-inline--flex align-items-center justify-content-center mb-0">
                    <input
                      type="checkbox"
                      className="switch"
                      data-toggle="modal"
                      data-target="#edModal"
                      onClick={() =>
                        setShowHome({ value: true, type: "enable" })
                      }
                    />
                  </label>
                </div>
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
          pageRangeDisplayed={4}
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
      <Modal
        show={isDelete.value}
        onClose={() => setIsDelete({ value: false })}
      >
        <div className="" id="faq-delete-modal">
          <div class="modal-body py-5 my-2 text-center">
            <h3 class="weight-600">
              {isDelete.type == "delete"
                ? "Are you sure want to Delete this user?"
                : "Are you sure want to Enable this user?"}
            </h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <div class="text-center row justify-content-center mx-0 mt-5">
              <a
                type="button"
                href
                className="btn btn-secondary rounded-md mx-1 col-sm-4 font-16 py-3"
                onClick={() => setIsDelete(false)}
              >
                Cancel
              </a>
              <a
                type="button"
                href
                className={`btn btn-${
                  isDelete.type == "enable" ? "primary" : "danger"
                } rounded-md mx-1 col-sm-4 font-16 py-3`}
                style={{ color: "white" }}
              >
                {isDelete.type == "enable" ? "Enable" : "Delete"}
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomerTable;
