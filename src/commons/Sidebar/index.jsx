import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  let activeStyle = {
    color: "#ffffff",
    background: "#6f56ba",
  };
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Dashboard</span>
                </a>
              </li>
            )}
          </NavLink>
          <NavLink to="/customer" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Manage Customer</span>
                </a>
              </li>
            )}
          </NavLink>
          <NavLink to="/kyc" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Manage Kyc</span>
                </a>
              </li>
            )}
          </NavLink>
          <NavLink to="/fee" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Fees Management</span>
                </a>
              </li>
            )}
          </NavLink>
          <NavLink to="/coin" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Coins/coin Pair Management</span>
                </a>
              </li>
            )}
          </NavLink>
          <NavLink to="/alerts-notification" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Alerts And Notification</span>
                </a>
              </li>
            )}
          </NavLink>
          <NavLink to="/transaction" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Transaction History</span>
                </a>
              </li>
            )}
          </NavLink>
          <NavLink to="/report" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Reports And Export</span>
                </a>
              </li>
            )}
          </NavLink>
          <NavLink to="/cms" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Cms</span>
                </a>
              </li>
            )}
          </NavLink>

          <NavLink to="/ticket" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Manage Tickets</span>
                </a>
              </li>
            )}
          </NavLink>
          <NavLink to="/help" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={isActive ? activeStyle : undefined}>
                  <span className="menu-title">Help Center</span>
                </a>
              </li>
            )}
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default index;
