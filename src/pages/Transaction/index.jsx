import React from 'react'
import Header from '../../commons/Header'
import Footer from '../../commons/Footer'
import Sidebar from '../../commons/Sidebar'
import Transaction from '../../components/Tables/Transaction/TransactionTable'

const index = () => {
  return (
    <>
<div>
  <Header />
  <div className="container-fluid page-body-wrapper">
<Sidebar />
    <div className="main-panel">
      <div className="content-wrapper">
       <Transaction />
      </div>
      <Footer />
    </div>
  </div>
  {/* Delete Modal */}
  <div className="modal fade" id="acceptModal" tabIndex={-1}>
    <div className="modal-dialog modal-md modal-dialog-centered">
      <div className="modal-content rounded-lg">
        <div className="modal-body py-5 my-2 text-center">
          <h3 className="weight-600">Are you sure want to Accept this user?</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          <div className="text-center row justify-content-center mx-0 mt-5">
            <button type="button" className="btn btn-secondary rounded-md mx-1 col-sm-4 font-16 py-3" data-dismiss="modal">Cancel</button>
            <a href className="btn btn-success rounded-md mx-1 col-sm-4 font-16 py-3">Accept</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Enable/Disabled Modal */}
  <div className="modal fade" id="declineModal" tabIndex={-1}>
    <div className="modal-dialog modal-md modal-dialog-centered">
      <div className="modal-content rounded-lg">
        <div className="modal-body py-5 my-2 text-center">
          <h3 className="weight-600">Are you sure want to Decline this user?</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          <div className="text-center row justify-content-center mx-0 mt-5">
            <button type="button" className="btn btn-secondary rounded-md mx-1 col-sm-4 font-16 py-3" data-dismiss="modal">Cancel</button>
            <a href className="btn btn-danger rounded-md mx-1 col-sm-4 font-16 py-3">Decline</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*?php include ('includes/footer-files.php'); ?*/}
  {/*?php include ('includes/footer.php'); ?*/}
</div>

    </>
  )
}

export default index