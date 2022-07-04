import React from "react";
import Header from "../../commons/Header";
import Sidebar from "../../commons/Sidebar";
import HelpTable from "../../components/Tables/Help/HelpTable";
import Footer from "../../commons/Footer";

const Help = () => {
  return (
    <>
      <div>
        <Header />

        <div className="container-fluid page-body-wrapper">
          <Sidebar />

          <div className="main-panel">
            <div className="content-wrapper">
              <div className="card card-table round">
                <HelpTable />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
