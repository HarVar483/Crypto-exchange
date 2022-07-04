import React, { useRef, useState } from "react";
import DeleteIcon from "../../../assets/images/icons/delete.svg";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Modal from "../../../commons/Modal/Modal";

const Coin = () => {
  const navigate = useNavigate();
  const pagination = useRef();
  const [isDelete, setIsDelete] = useState({ value: false, id: "", type: "" });
  return (
    <>
      <div className="sub-title d-flex align-items-center mt-2">
        <h2 className="weight-500">Coin/Coin Pair Management</h2>
        <div className="ml-auto">
          <a
            onClick={() => navigate("/addcoin")}
            className="btn btn-primary rounded-md font-18"
            style={{ color: "white" }}
          >
            Add Coin
          </a>
        </div>
      </div>
      <div className="search-bar d-flex align-items-center justify-content-between mb-4"></div>
      <div className="table-responsive">
        <table className="table table-striped table-borderless text-black mb-0">
          <thead>
            <tr>
              <th className="py-4">Coin Name</th>
              <th className="py-4">Coin Code</th>
              <th className="py-4">Coin Value</th>
              <th className="py-4 text-center" width={125}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bitcoin</td>
              <td>BTC</td>
              <td>30399.20</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Ethereum</td>
              <td>ETH</td>
              <td>1815.16</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Solana</td>
              <td>SOL</td>
              <td>40.69</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Polkadot</td>
              <td>DOT</td>
              <td>9.7982</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Shiba Inu</td>
              <td>SHIB</td>
              <td>0.00001106</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Cardano</td>
              <td>ADA</td>
              <td>0.59</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Tether</td>
              <td>USDT</td>
              <td>1.00</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Ripple</td>
              <td>XRP</td>
              <td>0.41</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Dogecoin</td>
              <td>DOGE</td>
              <td>0.082</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Avalanche</td>
              <td>AVAX</td>
              <td>24.21</td>
              <td>
                <div className="action">
                  <a href data-toggle="modal" data-target="#deleteModal">
                    <img
                      src={DeleteIcon}
                      onClick={() =>
                        setIsDelete({ value: true, type: "delete" })
                      }
                    />
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
      <Modal
        show={isDelete.value}
        onClose={() => setIsDelete({ value: false })}
      >
        <div className="" id="faq-delete-modal">
          <div class="modal-body py-5 my-2 text-center">
            <h3 class="weight-600">
              {isDelete.type == "delete"
                ? "Are you sure want to Remove this coin?"
                : "Are you sure want to Remove this coin?"}
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

export default Coin;
