import React, { useRef } from "react";
import Footer from "../../commons/Footer/index";
import Sidebar from "../../commons/Sidebar";
import Header from "../../commons/Header";
import Coin from "../../components/Tables/Coin/Coin";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const CoinPair = () => {
  const navigate = useNavigate();
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
                <Coin />
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
                  Are you sure want to Remove this coin?
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
        {/*?php include ('includes/footer-files.php'); ?*/}
        {/*?php include ('includes/footer.php'); ?*/}
      </div>
    </>
  );
};

export default CoinPair;
