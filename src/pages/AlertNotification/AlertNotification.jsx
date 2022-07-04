import React, { useState } from "react";
import Header from "../../commons/Header";
import Email from "./Email";
import PushNotification from "./PushNotification";
import Sidebar from "../../commons/Sidebar";
import Footer from "../../commons/Footer";
import ArrowSvg from "../../assets/images/icons/back-arrow.svg";
const AlertNotification = () => {
  const [notification, setNotificationType] = useState({
    type: "email",
  });
                       
  return (
    <>
      <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="sub-title d-flex align-items-center mt-2">
              <h2 class="weight-500 d-flex align-items-center">
                <img src={ArrowSvg} class="mr-3" /> Alerts and Notifications
              </h2>
            </div>
            <ul class="nav nav-tabs font-18 my-4">
              <li class="nav-item">
                <a
                  style={{ cursor: "pointer" }}
                  class={`nav-link px-5 ${
                    notification.type == "email" ? "active" : undefined
                  }`}
                  data-toggle="tab"
                  role="tab"
                  onClick={() => setNotificationType({ type: "email" })}>
                  Email
                </a>
              </li>
              <li class="nav-item ml-4">
                <a
                  style={{ cursor: "pointer" }}
                  class={`nav-link px-5 ${
                    notification.type == "pushNotificaion"
                      ? "active"
                      : undefined
                  }`}
                  data-toggle="tab"
                  role="tab"
                  onClick={() =>
                    setNotificationType({ type: "pushNotificaion" })
                  }>
                  Push Notification
                </a>
              </li>
            </ul>
            {notification.type == "email" ? <Email /> : <PushNotification />}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AlertNotification;
