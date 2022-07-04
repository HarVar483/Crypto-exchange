import React, { useState } from "react";
import Header from "../../commons/Header";
import Footer from "../../commons/Footer";
import Sidebar from "../../commons/Sidebar";
import Face1 from "../../assets/images/faces/face1.jpg";
import EditIcon1 from "../../assets/images/icons/edit-1.svg";
import Modal from "../../commons/Modal/Modal";

const EditProfile = () => {
  const [showHome, setShowHome] = useState({
    value: false,
    id: "",
  });
  const [showHome_2, setShowHome_2] = useState({
    value: false,
    id: "",
  });

  return (
    <>
      <div>
        <div className="container-scroller">
          <Header />

          <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
              <div className="content-wrapper mt-5 pt-5">
                <div className="row mt-5">
                  <div className="col-md-4 m-auto">
                    <form action="<?php echo $host ?>/dashboard.php">
                      <div className="text-center mb-4 pb-4">
                        <div className="avatar xxl d-table mx-auto upload">
                          <div className="inner">
                            <img src={Face1} className="image-fit" />
                          </div>
                          <label className="edit">
                            <img src={EditIcon1} />
                            <input type="file" />
                          </label>
                        </div>
                      </div>
                      <div className="form-group over-label md password-field mb-2 edit">
                        <input
                          type="email"
                          className="form-control unlock-icon weight-400"
                          disabled
                          id
                          defaultValue="patrick@gmail.com"
                        />
                        <label
                          style={{
                            transform: "translate(20px, -6px)",
                            background: "white",
                            zIndex: "1",
                            fontSize: "12px",
                          }}>
                          Email ID
                        </label>
                        <span
                          className="icon"
                          role="button"
                          data-toggle="modal"
                          data-target="#editEmail">
                          <img
                            src={EditIcon1}
                            onClick={() => setShowHome({ value: true })}
                          />
                        </span>
                      </div>
                      <div className="text-center mt-4 mb-4">
                        <a
                          className="text-gray weight-400"
                          data-toggle="modal"
                          data-target="#changePassword"
                          onClick={() => setShowHome_2({ value: true })}>
                          Change Password
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* content-wrapper ends */}
              {/*?php include ('includes/copyright.php'); ?*/}
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <Modal show={showHome.value} onClose={() => setShowHome({ value: true })}>
        <div class="modal-body">
          <h3 class="text-center weight-600 my-4">Change Email</h3>
          <form class="col-sm-8 mx-auto pt-2">
            <div class="form-group over-label md password-field mb-2">
              <input
                type="email"
                class="form-control unlock-icon weight-400"
                id=""
                value="patrick@gmail.com"
              />
              <label
                style={{
                  transform: "translate(20px, -6px)",
                  background: "white",
                  zIndex: "1",
                  fontSize: "12px",
                }}>
                New Email ID
              </label>
            </div>
            <div class="px-3 my-4 py-2">
              <button
                class="btn btn-primary w-100 py-3 rounded-lg"
                onClick={() => setShowHome({ value: false })}>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        show={showHome_2.value}
        onClose={() => setShowHome_2({ value: true })}>
        <div>
          <div className="modal-content">
            <div class="modal-body">
              <button
                type="button"
                class="close tr"
                style={{ right: "-11px" }}
                data-dismiss="modal">
                <span
                  aria-hidden="true"
                  onClick={() => setShowHome_2({ value: false })}>
                  &times;
                </span>
              </button>
              <h3 class="text-center weight-600 my-4">Change Password</h3>
              <form class="col-sm-8 mx-auto pt-2">
                <div class="form-group over-label md password-field mb-4">
                  <input
                    type="email"
                    class="form-control unlock-icon weight-400"
                    id=""
                    value=""
                  />
                  <label
                    style={{
                      transform: "translate(20px, -6px)",
                      background: "white",
                      zIndex: "1",
                      fontSize: "12px",
                    }}>
                    Enter New Password
                  </label>
                </div>
                <div class="form-group over-label md password-field mb-2">
                  <input
                    type="email"
                    class="form-control unlock-icon weight-400"
                    id=""
                    value=""
                  />
                  <label
                    style={{
                      transform: "translate(20px, -6px)",
                      background: "white",
                      zIndex: "1",
                      fontSize: "12px",
                    }}>
                    New Password
                  </label>
                </div>
                <div class="px-3 my-4 py-2">
                  <button class="btn btn-primary w-100 py-3 rounded-lg">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditProfile;
