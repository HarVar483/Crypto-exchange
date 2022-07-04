import React, { useState } from "react";
import EditIcon from "../../../src/assets/images/icons/ellipsis-v.svg";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate()
  return (
    <>
      <div className="card card-table round mt-3 mb-5">
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
            <table className="table table-striped table-borderless text-black mb-0 lh-lg">
              <thead>
                <tr>
                  <th className="py-4 font-24 weight-700">
                    <div className="weight-500">Privacy Policy</div>
                  </th>
                  <th className="align-middle pr-4">
                    <div className="d-flex justify-content-end dropdown">
                      <span
                        className="p-2 dropdown-tnc"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src={EditIcon}
                          onClick={() => setShowDropDown(!showDropDown)}
                        />
                      </span>
                      {showDropDown && (
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            className="dropdown-item"
                            role="button"
                            data-toggle="show-hide"
                            data-show=".edit-content.tnc"
                            data-hide=".content.tnc, .dropdown-tnc"
                            onClick={()=>navigate("/editprivacy")}
                          >
                            Edit
                          </a>
                        </div>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
            <div className="bg-gray p-4 rounded-bottom-lg">
              <div className="content tnc">
                <h4>Last Updated: June 03, 2022</h4>
                <h5>Introduction</h5>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <h5>Lorem ipsum</h5>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <h5>Lorem ipsum</h5>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
