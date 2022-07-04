import React, { useRef, useState } from "react";
import DeleteIcon from "../../../assets/images/icons/delete.svg";
import ReplyIcon from "../../../assets/images/icons/reply.svg";
import ReactPaginate from "react-paginate";
import Modal from "../../../commons/Modal/Modal";

const TicketTable = () => {
  const pagination = useRef();
  const [isDelete, setIsDelete] = useState({
    value: false,
    type: "",
    id: "",
  });
  return (
    <>
      <div className="content-wrapper">
        <div className="sub-title d-flex align-items-center mt-2">
          <h2 className="weight-500">Manage Tickets</h2>
        </div>
        <div className="search-bar d-flex align-items-center justify-content-between mb-4"></div>
        <div className="card card-table round">
          <div className="table-responsive">
            <table className="table table-striped table-borderless text-black mb-0">
              <thead>
                <tr>
                  <th className="py-4">S.no</th>
                  <th className="py-4">Name</th>
                  <th className="py-4">Ticket ID</th>
                  <th className="py-4">Description</th>
                  <th className="py-4">Date &amp; Time</th>
                  <th className="py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Carl Harper</td>
                  <td>791531</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Louis Mccormick</td>
                  <td>543145</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Laurie Rodriquez</td>
                  <td>791531</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Herbert Graves</td>
                  <td>543145</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Alonzo Daniels</td>
                  <td>791531</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Carl Harper</td>
                  <td>543145</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Louis Mccormick</td>
                  <td>791531</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Laurie Rodriquez</td>
                  <td>543145</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Herbert Graves</td>
                  <td>791531</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Alonzo Daniels</td>
                  <td>543145</td>
                  <td>But I must explain to you how all…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2">
                        <img src={ReplyIcon} />
                      </a>
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() =>
                          setIsDelete({ value: true, type: "delete" })
                        }
                      >
                        <img src={DeleteIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-md-flex align-items-center justify-content-between mt-3">
          <div className="font-14 weight-500 text-gray">
            10 Results Per Page
          </div>
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
      </div>
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

export default TicketTable;
