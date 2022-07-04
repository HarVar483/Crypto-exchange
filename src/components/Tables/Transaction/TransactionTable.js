import React, { useState, useRef } from "react";
import Select from "react-select";
import customStyles from "../../../commons/SelectStyles/Select";
import ReactPaginate from "react-paginate";

const TransactionTable = () => {
  const [sort, setSort] = useState();
  const pagination = useRef();
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
        <h2 className="weight-500">Transaction History</h2>
        <div className="ml-auto px-0">
          <form className="d-flex align-items-center">
            <div className="form-group my-0">
              <Select
                options={sortOptions}
                defaultValue={{ label: "Filter", value: "Filter" }}
                onChange={handleSort}
                value={sort}
                styles={customStyles}
                isSearchable={false}
                placeholder="Sort By"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="search-bar d-flex align-items-center justify-content-between mb-4"></div>
      <div className="card card-table round">
        <div className="table-responsive">
          <table className="table table-striped table-borderless text-black mb-0">
            <thead>
              <tr>
                <th className="py-4">Customer Name</th>
                <th className="py-4">Mode</th>
                <th className="py-4">Type</th>
                <th className="py-4">Amount</th>
                <th className="py-4" width={175}>
                  Date &amp; Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carl Harper</td>
                <td>Banking</td>
                <td>Deposit</td>
                <td>$100</td>
                <td>23 Feb, 02:10 pm</td>
              </tr>
              <tr>
                <td>Louis Mccormick</td>
                <td>Hazel Card</td>
                <td>Pay</td>
                <td>$100</td>
                <td>23 Feb, 02:10 pm</td>
              </tr>
              <tr>
                <td>Laurie Rodriquez</td>
                <td>Transfer</td>
                <td>Send</td>
                <td>$100</td>
                <td>23 Feb, 02:10 pm</td>
              </tr>
              <tr>
                <td>Herbert Graves</td>
                <td>Transfer</td>
                <td>Received</td>
                <td>$100</td>
                <td>23 Feb, 02:10 pm</td>
              </tr>
              <tr>
                <td>Alonzo Daniels</td>
                <td>Banking</td>
                <td>Deposit</td>
                <td>$100</td>
                <td>23 Feb, 02:10 pm</td>
              </tr>
              <tr>
                <td>Carl Harper</td>
                <td>Coins</td>
                <td>Buy</td>
                <td>$100</td>
                <td>23 Feb, 02:10 pm</td>
              </tr>
              <tr>
                <td>Louis Mccormick</td>
                <td>Coins</td>
                <td>Sell</td>
                <td>$100</td>
                <td>23 Feb, 02:10 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default TransactionTable;
