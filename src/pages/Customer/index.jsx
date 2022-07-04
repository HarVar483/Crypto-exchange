import React, { useRef } from "react";
import Header from "../../commons/Header";
import Sidebar from "../../commons/Sidebar";
import Footer from "../../commons/Footer";

import ReactPaginate from "react-paginate";
import CustomerTable from "../../components/Tables/Customer/CustomerTable";
function Customer() {
  const pagination = useRef();
  return (
    <>
      <div>
        <Header />

        <div className="container-fluid page-body-wrapper">
          <Sidebar />

          <div className="main-panel">
            <div className="content-wrapper">
              <div className="card card-table round">
                <CustomerTable />
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

       
      </div>
    </>
  );
}

export default Customer;
