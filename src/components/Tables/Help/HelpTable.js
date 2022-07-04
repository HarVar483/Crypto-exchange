import React, { useRef, useState } from "react";
import ReplyIcon from "../../../assets/images/icons/reply.svg";
import ReactPaginate from "react-paginate";
import Modal from "../../../commons/Modal/Modal";
import CrossIcon from "../../../assets/images/icons/cross.svg";

const HelpTable = () => {
  const pagination = useRef();
  const [reply, setReply] = useState({
    value: false,
    type: "",
    id: "",
  });
  return (
    <>
      <div className="content-wrapper">
        <div className="sub-title d-flex align-items-center mt-2">
          <h2 className="weight-500">Help Center</h2>
        </div>
        <div className="search-bar d-flex align-items-center justify-content-between mb-4"></div>
        <div className="card card-table round">
          <div className="table-responsive">
            <table className="table table-striped table-borderless text-black mb-0">
              <thead>
                <tr>
                  <th className="py-4">S.no</th>
                  <th className="py-4">Name</th>
                  <th className="py-4">Email Address</th>
                  <th className="py-4">Description</th>
                  <th className="py-4">Date &amp; Time</th>
                  <th className="py-4">Status</th>
                  <th className="py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Carl Harper</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-success">
                      Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Louis Mccormick</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-warning">
                      Not Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Laurie Rodriquez</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-success">
                      Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Herbert Graves</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-warning">
                      Not Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Alonzo Daniels</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-success">
                      Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Carl Harper</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-warning">
                      Not Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Louis Mccormick</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-success">
                      Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Laurie Rodriquez</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-warning">
                      Not Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Herbert Graves</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-success">
                      Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Alonzo Daniels</td>
                  <td>abcxyz@random.com</td>
                  <td>The quick, brown…</td>
                  <td>23 May, 02:10 pm</td>
                  <td>
                    <span className="badge badge-pill badge-warning">
                      Not Replied
                    </span>
                  </td>
                  <td>
                    <div className="action">
                      <a
                        href
                        className="mx-2"
                        data-toggle="modal"
                        data-target="#replyModal"
                        onClick={() =>
                          setReply({
                            value: true,
                          })
                        }
                      >
                        <img src={ReplyIcon} />
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
          {/* <nav aria-label="Page navigation example">
            <ul className="pagination my-0">
              <li className="page-item">
                <a className="page-link px-2" role="button">
                  <i className="mdi mdi-chevron-double-left" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link px-2" role="button">
                  <i className="mdi mdi-chevron-left" />
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link px-2" role="button">
                  <i className="mdi mdi-chevron-right" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link px-2" role="button">
                  <i className="mdi mdi-chevron-double-right" />
                </a>
              </li>
            </ul>
          </nav> */}
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
        <Modal show={reply.value} onClose={() => setReply({ value: false })}>
          <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content rounded-lg bg-light">
              <div className="modal-body py-2 my-2 text-center px-4">
                <div className="d-flex align-items-center">
                  <h3 className="my-0">Reply To</h3>
                  <span
                    className="ml-auto mr-n2"
                    role="button"
                    data-dismiss="modal"
                  >
                    <img src={CrossIcon} onClick={() => setReply(false)} />
                  </span>
                </div>
                <form>
                  <div className="form-group mt-3">
                    <input
                      className="form-control lg rounded-md border-0 font-16 px-4"
                      placeholder="Email Id"
                      defaultValue="abcxyz@random.com"
                    />
                  </div>
                  <div className="form-group is-filled">
                    <textarea
                      className="form-control rounded-md border-0 font-16 p-4 lh-26"
                      rows={4}
                      placeholder="Message"
                      defaultValue={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod labore et dolore"
                      }
                    />
                  </div>
                </form>
                <div className="text-center row mx-0 mt-4">
                  <button
                    className="btn btn-primary rounded-md mx-1 col-sm-4 font-16 py-3"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default HelpTable;
