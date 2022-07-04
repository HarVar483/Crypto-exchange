import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import Face from "../../assets/images/faces/face1.jpg";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center">
          {/*<button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
			<span class="mdi mdi-menu"></span>
		</button>*/}
          <h3 className="my-0 text-black weight-500 font-26 ml-2 flex-fill">
            <img src={Logo} height={70} />
          </h3>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
              <a
                href
                className="nav-link"
                id
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div
                  className="nav-profile-img"
                  onClick={() => setShowDropDown(!showDropDown)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={Face} />
                </div>
              </a>
              <a></a>
              {showDropDown && (
                <div className="dropdown-menu dropdown-menu-right">
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/editprofile")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="mdi mdi-account-edit mr-2" /> Edit Profile
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="mdi mdi-logout mr-2" /> Logout
                  </a>
                </div>
              )}
            </li>
          </ul>

          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
