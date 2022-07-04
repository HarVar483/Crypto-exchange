import React,{useRef} from 'react'
import eye from "../../../assets/images/icons/eye.svg";
import iconExport from "../../../assets/images/icons/export.svg"
import ReactPaginate from "react-paginate";

const Report = () => {
    const pagination = useRef();
  return (
    
  <>
  <div className="sub-title d-flex align-items-center mt-2">
          <h2 className="weight-500">Reports and Export</h2>
          <div className="search col-sm-3 ml-auto px-0">
            <form className="d-flex align-items-center">
              <div className="form-group my-0 flex-fill">
                <input className="form-control search-icon" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
        <div className="search-bar d-flex align-items-center justify-content-between mb-4">
        </div>
        <div className="card card-table round">
          <div className="table-responsive">
            <table className="table table-striped table-borderless text-black mb-0">
              <thead>
                <tr>
                  <th className="py-4">S.no</th>
                  <th className="py-4">Name</th>
                  <th className="py-4">Phone Number</th>
                  <th className="py-4">Email Address</th>
                  <th className="py-4">Address</th>
                  <th className="py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Carl Harper</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>Caledonia, Illinois</td>
                  <td>
                    <div className="action">
                      <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Louis Mccormick</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>Potterville, Michigan</td>
                  <td>
                    <div className="action">
                    <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Laurie Rodriquez</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>Garretson, South Dakota</td>
                  <td>
                    <div className="action">
                    <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Herbert Graves</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>Hazelwood, Missouri</td>
                  <td>
                    <div className="action">
                    <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Alonzo Daniels</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>San Leandro, California</td>
                  <td>
                    <div className="action">
                    <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Carl Harper</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>Caledonia, Illinois</td>
                  <td>
                    <div className="action">
                    <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Louis Mccormick</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>Potterville, Michigan</td>
                  <td>
                    <div className="action">
                    <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Laurie Rodriquez</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>Garretson, South Dakota</td>
                  <td>
                    <div className="action">
                    <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Herbert Graves</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>Hazelwood, Missouri</td>
                  <td>
                    <div className="action">
                    <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Alonzo Daniels</td>
                  <td>+11 9876543210</td>
                  <td>abcxyz@random.com</td>
                  <td>San Leandro, California</td>
                  <td>
                    <div className="action">
                    <a href className="mx-2"><img src={eye} height={14} /></a>
                      <a href className="mx-2"><img src={iconExport} /></a>
                    </div>
                  </td>
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
  )
}

export default Report