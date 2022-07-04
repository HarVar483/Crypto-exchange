import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { editorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import Header from "../../commons/Header";
import Sidebar from "../../commons/Sidebar";
import TermCondition from "./TermCondition";
import Privacy from "./Privacy";
import Footer from "../../commons/Footer";
import EditPrivacy from "./EditPrivacy";

const EditTerm = () => {
  const [term, setTerm] = useState({
    type: "editterm",
  });
  const [description, setDescription] = useState({
    htmlValue: <p>fjdkgfjdjgjskjgvkdjsffghfghf</p>,
    editorState: EditorState.createEmpty(),
  });
  const onEditorStateChange = (editorValue) => {
    const editorStateInHtml = draftToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );

    setDescription({
      htmlValue: editorStateInHtml,
      editorState: editorValue,
    });
  };
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="sub-title d-flex align-items-center mt-2">
                <h2 className="weight-500 d-flex align-items-center">
                  Customer Management System
                </h2>
              </div>
              <ul className="nav nav-tabs font-18 my-4">
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    class={`nav-link px-5 ${
                      term.type == "editterm" ? "active" : undefined
                    }`}
                    data-toggle="tab"
                    role="tab"
                    onClick={() => setTerm({ type: "editterm" })}
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="nav-item ml-4">
                  <a
                    style={{ cursor: "pointer" }}
                    class={`nav-link px-5 ${
                      term.type == "editprivacy" ? "active" : undefined
                    }`}
                    data-toggle="tab"
                    role="tab"
                    onClick={() => setTerm({ type: "editprivacy" })}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
              {/* {term.type == "editterm" ? <EditTerm /> : <EditPrivacy />} */}
              <div className="card card-table round mt-3 mb-5">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab-1"
                    role="tabpanel"
                  >
                    <table className="table table-striped table-borderless text-black mb-0 lh-lg">
                      <thead>
                        <tr>
                          <th className="py-4 font-24 weight-700">
                            <div className="weight-500">
                              Terms &amp; Conditions
                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <div className="bg-gray p-4 rounded-bottom-lg">
                      <div className="edit-content tnc">
                        <Editor
                          editorState={description.editorState}
                          onEditorStateChange={onEditorStateChange}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          wrapperStyle={{
                            border: "1px solid #cfd4da",
                            borderRadius: "8px",
                          }}
                          editorStyle={{
                            background: "white",
                            padding: "1em",
                            height: "400px",
                           
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTerm;
