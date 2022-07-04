import React from "react";
import Footer from "../../commons/Footer/index";
import Header from "../../commons/Header/index";
import Sidebar from "../../commons/Sidebar";
import TicketTable from "../../components/Tables/TicketTable/TicketTable";

const index = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <TicketTable />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
