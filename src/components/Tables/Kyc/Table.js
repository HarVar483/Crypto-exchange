import React, { useRef, useState } from "react";
import eye from "../../../assets/images/icons/eye.svg";
import DeleteIcon from "../../../assets/images/icons/delete.svg";
import AcceptIcon from "../../../assets/images/icons/tick-bold.svg";
import RejectIcon from "../../../assets/images/icons/cross-bold.svg";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import customStyles from "../../../commons/SelectStyles/Select";

const Table = () => {
  const pagination = useRef();
  const [sort, setSort] = useState();
  const handleSort = () => {};
  const [sortOptions, setSortOptions] = useState([
    { value: "-1", label: "Filter" },
    { value: "-1", label: "Pending" },
    { value: "-1", label: "Accepted" },
    { value: "1", label: "Rejected" },
  ]);
  return (
    <>
      <div className="sub-title d-flex align-items-center mt-2">
        <h2 className="weight-500">Manage KYC</h2>
        <div className="search col-sm-4 ml-auto px-0">
          <form className="d-flex align-items-center">
            <div className="form-group my-0 mr-4" style={{ zIndex: "10" }}>
              {/* <select className="form-control filter selectpicker default"> */}
              {/* <option value>Filter</option>
                  <option value>Pending</option>
                  <option value>Accepted</option>
                  <option value>Rejected</option> */}
              {/* <div className="custom-select m-0" style={{ zIndex: "10" }}></div> */}
              <Select
                options={sortOptions}
                defaultValue={{ label: "Filter", value: "Filter" }}
                onChange={handleSort}
                value={sort}
                styles={customStyles}
                isSearchable={false}
                placeholder="Sort By"
              />
              {/* </select> */}
            </div>
            <div className="form-group my-0 flex-fill">
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
              <th className="py-4">Email Address</th>
              <th className="py-4">Type</th>
              <th className="py-4">Status</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Carl Harper</td>
              <td>abcxyz@random.com</td>
              <td>Driving Licence</td>
              <td>
                <span className="badge badge-pill badge-warning">Pending</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Louis Mccormick</td>
              <td>abcxyz@random.com</td>
              <td>PAN Card</td>
              <td>
                <span className="badge badge-pill badge-success">Accepted</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Laurie Rodriquez</td>
              <td>abcxyz@random.com</td>
              <td>Driving Licence</td>
              <td>
                <span className="badge badge-pill badge-danger">Rejected</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Herbert Graves</td>
              <td>abcxyz@random.com</td>
              <td>PAN Card</td>
              <td>
                <span className="badge badge-pill badge-warning">Pending</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Alonzo Daniels</td>
              <td>abcxyz@random.com</td>
              <td>Driving Licence</td>
              <td>
                <span className="badge badge-pill badge-success">Accepted</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Carl Harper</td>
              <td>abcxyz@random.com</td>
              <td>PAN Card</td>
              <td>
                <span className="badge badge-pill badge-danger">Rejected</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Louis Mccormick</td>
              <td>abcxyz@random.com</td>
              <td>Driving Licence</td>
              <td>
                <span className="badge badge-pill badge-warning">Pending</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Laurie Rodriquez</td>
              <td>abcxyz@random.com</td>
              <td>PAN Card</td>
              <td>
                <span className="badge badge-pill badge-success">Accepted</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Herbert Graves</td>
              <td>abcxyz@random.com</td>
              <td>Driving Licence</td>
              <td>
                <span className="badge badge-pill badge-danger">Rejected</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Alonzo Daniels</td>
              <td>abcxyz@random.com</td>
              <td>PAN Card</td>
              <td>
                <span className="badge badge-pill badge-warning">Pending</span>
              </td>
              <td>
                <div className="action">
                  <a href className="mx-1">
                    <img src={eye} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#acceptModal"
                  >
                    <img src={AcceptIcon} height={14} />
                  </a>
                  <a
                    href
                    className="mx-1"
                    data-toggle="modal"
                    data-target="#declineModal"
                  >
                    <img src={RejectIcon} height={14} />
                  </a>
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
    </>
  );
};

export default Table;
