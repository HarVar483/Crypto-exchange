import React, { useState, useEffect } from "react";
import Creatorimg from "../../assets/images/creator-img.png";
import checkimg from "../../assets/images/blue-check.png";
import { handleApiCall } from "../../apis";
import { endpoints } from "../../utils/endpoints";
import { PopUp } from "../../utils/utilities";
import { setCollectionNftData } from "../../redux/slice/Nft";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Filter = ({
  createApi,
  filter,
  collectionNft,
  isFilter = (state) => console.log(state),
}) => {
  const dispatch = useDispatch();
  const [fixed, setFixed] = useState({
    value: "",
    toggle: false,
  });

  const [auction, setAuction] = useState({
    value: "",
    toggle: false,
  });

  const [twoD, setTwoD] = useState({
    value: "",
    toggle: false,
  });

  const [threeD, setThreeD] = useState({
    value: "",
    toggle: false,
  });

  const [digiDes, setDigiDes] = useState({
    value: "",
    toggle: false,
  });

  const [constructed, setConstructed] = useState({
    value: "",
    toggle: false,
  });

  const [digiEx, setDigiEx] = useState({
    value: "",
    toggle: false,
  });

  const [constructAllowed, setConstructAllowed] = useState({
    value: "",
    toggle: false,
  });

  const [optionsDrawingFormat, setOptionsDrawingFormat] = useState([
    { value: "dwg", label: "DWG" },
    { value: "max", label: "MAX" },
    { value: "skp", label: "SKP" },
    { value: "lum", label: "LUM" },
    { value: "rvt", label: "RVT" },
    { value: "pdf", label: "PDF" },
    { value: "glb", label: "GLB" },
    { value: "gltf", label: "GLTF" },
    { value: "dgn", label: "DGN" },
    { value: "dae", label: "DAE" },
    { value: "obj", label: "OBJ" },
    { value: "dxf", label: "DXF" },
    { value: "stl", label: "STL" },
    { value: "fbx", label: "FBX" },
    { value: "3dm", label: "3DM" },
    { value: "ma", label: "MA" },
    { value: "mb", label: "MB" },
    { value: "blend", label: "BLEND" },
  ]);

  const [creatorData, setCreatorData] = useState([]);
  const [collectionData, setCollectionData] = useState([]);
  const [typoData, setTypoData] = useState([]);
  const [typoSearch, setTypoSearch] = useState("");
  const [collectionSearch, setCollectionSearch] = useState("");
  const [creatorSearch, setCreatorSearch] = useState("");
  const [drawSearch, setDrawSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [creator, setCreator] = useState([]);
  const [collection, setCollection] = useState([]);
  const [typology, setTypologList] = useState([]);
  const [drawingFormat, setDrawingFormat] = useState([]);
  const [selectedTypo, setSelectedTypo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    handleCreators();
  }, [creatorSearch]);
  useEffect(() => {
    handleCollections();
  }, [collectionSearch]);

  useEffect(() => {
    handleTypology();
  }, [typoSearch]);

  const handleCreators = async () => {
    const response = await handleApiCall(
      "get",
      `${endpoints.getAllCreator}?search=${creatorSearch}`
    );
    if (response.data.success) {
      setCreatorData(response?.data?.data);
    } else {
      setCreatorData([]);
    }
  };

  const handleTypology = async () => {
    const response = await handleApiCall(
      "get",
      `${endpoints.getTypologySearch}?search=${typoSearch}`
    );
    if (response.data.success) {
      setTypoData(response?.data?.data);
    } else {
      setTypoData([]);
    }
  };

  const handleCollections = async () => {
    const response = await handleApiCall(
      "get",
      `${endpoints.getAllCollection}?search=${collectionSearch}`
    );
    if (response.data.success) {
      setCollectionData(response?.data?.data);
    } else {
      setCollectionData([]);
    }
  };

  const handleCreator = (value, isSelected) => {
    if (isSelected) {
      setCreator((prev) => [...prev, value]);
    } else {
      setCreator(creator.length && creator.filter((item) => item !== value));
    }
  };

  const handleCollection = (value, isSelected) => {
    if (isSelected) {
      setCollection((prev) => [...prev, value]);
    } else {
      setCollection(
        collection.length && collection.filter((item) => item !== value)
      );
    }
  };

  const handleDrawingFormat = (value, isSelected) => {

    if (isSelected) {
      setDrawingFormat((prev) => [...prev, value]);
    } else {
      setDrawingFormat(
        drawingFormat.length && drawingFormat.filter((item) => item !== value)
      );
    }
  };

  const handleTypologyData = (value, isSelected) => {
    if (isSelected) {
      setTypologList((prev) => [...prev, value]);
    } else {
      setTypologList(
        typology.length && typology.filter((item) => item !== value)
      );
    }
  };

  useEffect(() => {
    if (
      auction.value ||
      fixed.value ||
      creator.length ||
      minPrice ||
      maxPrice ||
      (collection && collection.length) ||
      (drawingFormat && drawingFormat.length) ||
      (typology && typology.length) ||
      twoD.value ||
      threeD.value ||
      digiDes.value ||
      digiEx.value ||
      constructAllowed.toggle ||
      constructed.toggle
    ) {
      // dispatch(setAllMarketPlace(1));
      isFilter(true);
      handleFilter();
    } else {
      // dispatch(setAllMarketPlace(1));
      isFilter(false);

      handleFilter();
    }
  }, [
    auction,
    fixed,
    creator,
    collection,
    drawingFormat,
    typology,
    twoD,
    threeD,
    digiDes,
    digiEx,
    constructAllowed,
    constructed,
  ]);

  const handleFilter = async () => {
    let data = {
      type: [],
      min: "",
      max: "",
      creator_name: [],
      typology: [],
      information_type: [],
      drawing_format: [],
      completion_status: [],
      licence_type: [],
    };
    if (auction.toggle) {
      data["type"] = [...data["type"], auction.value];
    }
    if (fixed.toggle) {
      data["type"] = [...data["type"], fixed.value];
    }
    if (minPrice) data["min"] = minPrice;
    if (maxPrice) data["max"] = maxPrice;
    if (creator.length) data["creator_name"] = creator;
    if (collection.length) data["tags"] = collection;
    if (typology.length) data["typology"] = typology;
    if (twoD.toggle)
      data["information_type"] = [...data["information_type"], twoD.value];
    if (threeD.toggle)
      data["information_type"] = [...data["information_type"], threeD.value];
    if (digiDes.toggle)
      data["completion_status"] = [...data["completion_status"], digiDes.value];
    if (constructed.toggle)
      data["completion_status"] = [
        ...data["completion_status"],
        constructed.value,
      ];
    if (digiEx.toggle)
      data["licence_type"] = [...data["licence_type"], digiEx.value];
    if (constructAllowed.toggle)
      data["licence_type"] = [...data["licence_type"], constructAllowed.value];

    if (drawingFormat.length)
      data["drawing_format"] = [...data["drawing_format"], ...drawingFormat];
    try {
      const response = await handleApiCall(
        "post",
        `${endpoints.listNftInCollection}?collection_id=${id}`,
        data
      );
      if (response?.data?.success) {
        dispatch(setCollectionNftData(response?.data?.data));
      } else {
        dispatch(setCollectionNftData([]));
      }
    } catch (error) {
      PopUp("Internal Server Error", error.response.message, "error");
    }
  };

  return (
    <>
      <div className="panel-group fillter-inner-box" id="accordion">
        <div className="panel panel-default property-type">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse1"
              >
                NFT Sale Type <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div id="collapse1" className="panel-collapse collapse in show">
            <div className="panel-body">
              <button
                type="button"
                onClick={() =>
                  setFixed({
                    value: "Fixed",
                    toggle: !fixed.toggle,
                  })
                }
                style={{
                  background: fixed.toggle && "#4472c7",
                  color: fixed.toggle && "white",
                }}
              >
                Buy Now
              </button>
              <button
                type="button"
                onClick={() =>
                  setAuction({
                    value: "Auction",
                    toggle: !auction.toggle,
                  })
                }
                style={{
                  background: auction.toggle && "#4472c7",
                  color: auction.toggle && "white",
                }}
              >
                On Auction
              </button>
              {/* <button type="button">Has Offers</button> */}
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse2"
              >
                Price Range <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div id="collapse2" className="panel-collapse collapse in show">
            <div className="panel-body price-range-wrap">
              <select name="dollor" className="united-states-dollor">
                <option value="dollor">United States Dollor (USD)</option>
                <option value="dollor1">United States Dollor (USD)</option>
                <option value="dollor2">United States Dollor (USD)</option>
                <option value="dollor3">United States Dollor (USD)</option>
              </select>
              <form className="price-range-form d-flex">
                <div className="form-group">
                  <input
                    type="number"
                    name="text"
                    placeholder="Min"
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
                <span>to</span>
                <div className="form-group">
                  <input
                    type="number"
                    name="text"
                    placeholder="Max"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </form>
              <a
                className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                onClick={handleFilter}
              >
                Apply
              </a>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse3"
              >
                Creator <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div id="collapse3" className="panel-collapse collapse in show">
            <div className="panel-body">
              <div className="input-group rounded">
                <i className="fas fa-search" />
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => setCreatorSearch(e.target.value)}
                />
              </div>
              <ul className="creator-list-style">
                {creatorData && creatorData.length > 0 ? (
                  creatorData.map((data) => {
                    return (
                      <>
                        <li>
                          <a>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={data._id}
                                onClick={(e) =>
                                  handleCreator(data?.name, e.target.checked)
                                }
                              />
                              <label
                                className="custom-control-label text-gray h6"
                                htmlFor={data._id}
                              />
                            </div>
                            <img src={Creatorimg} />
                            <span>{data.name}</span>
                            <img src={checkimg} className="blue-check" />
                          </a>
                        </li>
                      </>
                    );
                  })
                ) : (
                  <li
                    className="p-2"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      background: "white",
                    }}
                  >
                    No Result Found
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default property-type">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                className="collapsed"
                data-parent="#accordion"
                href="#collapse4"
              >
                Custom Properties <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div
            id="collapse4"
            className="custom-property-wrap panel-collapse collapse in show"
          >
            <div className="panel-body">
              <div className="input-group rounded">
                <i className="fas fa-search" />
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <ul className="creator-list-style">
                <li>
                  <a href="property-details.html">
                    <span>Office</span>
                  </a>
                </li>
                <li>
                  <a href="property-details.html">
                    <span>Residential</span>
                  </a>
                </li>
                <li>
                  <a >
                    <span>Building</span>
                  </a>
                </li>
                <li>
                  <a >
                    <span>Apartments</span>
                  </a>
                </li>
                <li>
                  <a href="property-details.html">
                    <span>Villas</span>
                  </a>
                </li>
                <li className="custom-property-list">
                  <a
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    href="javascript:void(0);"
                    tabIndex={0}
                  >
                    Office <i className="fas fa-times" />
                  </a>
                </li>
                <li className="custom-property-list">
                  <a
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    href="javascript:void(0);"
                    tabIndex={0}
                  >
                    Retail <i className="fas fa-times" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default property-type">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                className="collapsed"
                data-parent="#accordion"
                href="#collapse5"
              >
                Collection <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div id="collapse5" className="panel-collapse collapse in show">
            <div className="panel-body">
              <div className="input-group rounded">
                <i className="fas fa-search" />
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => setCollectionSearch(e.target.value)}
                />
              </div>
              <ul className="creator-list-style">
                {collectionData && collectionData.length > 0 ? (
                  collectionData.map((data) => {
                    return (
                      <li>
                        <a>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={data._id}
                              onClick={(e) =>
                                handleCollection(data?.name, e.target.checked)
                              }
                            />
                            <label
                              className="custom-control-label text-gray h6"
                              htmlFor={data._id}
                            />
                          </div>
                          <span>{data.name}</span>
                        </a>
                      </li>
                    );
                  })
                ) : (
                  <li
                    className="p-2"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      background: "white",
                    }}
                  >
                    No Result Found
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default property-type">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                className="collapsed"
                data-parent="#accordion"
                href="#collapse6"
              >
                Typology <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div id="collapse6" className="panel-collapse collapse in show">
            <div className="panel-body">
              <div className="input-group rounded">
                <i className="fas fa-search" />
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => setTypoSearch(e.target.value)}
                />
              </div>
              <ul className="creator-list-style">
                {typoData && typoData.length > 0 ? (
                  typoData.map((data) => {
                    return (
                      <li>
                        <a>
                          <div className="custom-control custom-checkbox">
                            {selectedTypo && selectedTypo === data?._id && (
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={data._id}
                                onClick={(e) =>
                                  handleTypologyData(
                                    data?._id,
                                    e.target.checked
                                  )
                                }
                                checked={
                                  selectedTypo && selectedTypo === data?._id
                                }
                              />
                            )}
                            {!selectedTypo && (
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={data._id}
                                onClick={(e) =>
                                  handleTypologyData(
                                    data?._id,
                                    e.target.checked
                                  )
                                }
                              />
                            )}
                            <label
                              className="custom-control-label text-gray h6"
                              htmlFor={data._id}
                            />
                          </div>
                          <span>{data.name}</span>
                        </a>
                      </li>
                    );
                  })
                ) : (
                  <li
                    className="p-2"
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      background: "white",
                    }}
                  >
                    No Result Found
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default property-type">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                className="collapsed"
                data-parent="#accordion"
                href="#collapse8"
              >
                Information Type <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div id="collapse8" className="panel-collapse collapse in show">
            <div className="panel-body">
              <button
                type="button"
                onClick={() =>
                  setTwoD({
                    value: "2D",
                    toggle: !twoD.toggle,
                  })
                }
                style={{
                  background: twoD.toggle && "#4472c7",
                  color: twoD.toggle && "white",
                }}
              >
                2D
              </button>
              <button
                type="button"
                onClick={() =>
                  setThreeD({
                    value: "3D",
                    toggle: !threeD.toggle,
                  })
                }
                style={{
                  background: threeD.toggle && "#4472c7",
                  color: threeD.toggle && "white",
                }}
              >
                3D
              </button>
            </div>
          </div>
        </div>
        <div className="panel panel-default property-type">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                className="collapsed"
                data-parent="#accordion"
                href="#collapse7"
              >
                Drawing Format <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div id="collapse7" className="panel-collapse collapse in show">
            <div className="panel-body">
              <div className="input-group rounded">
                <i className="fas fa-search" />
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => setDrawSearch(e.target.value)}
                />
              </div>
              <ul className="creator-list-style">
                {optionsDrawingFormat.length > 0 &&
                  optionsDrawingFormat
                    .filter((element) =>
                      element.label.toLowerCase().includes(drawSearch)
                    )
                    .map((data) => {
                      return (
                        <li>
                          <a>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={data.value}
                                onClick={(e) =>
                                  handleDrawingFormat(
                                    data.value,
                                    e.target.checked
                                  )
                                }
                              />
                              <label
                                className="custom-control-label text-gray h6"
                                htmlFor={data.value}
                              />
                            </div>
                            <span>{data.label}</span>
                          </a>
                        </li>
                      );
                    })}
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default property-type">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                className="collapsed"
                data-parent="#accordion"
                href="#collapse9"
              >
                Completion <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div id="collapse9" className="panel-collapse collapse in show">
            <div className="panel-body">
              <button
                type="button"
                onClick={() =>
                  setDigiDes({
                    value: "Digital Design",
                    toggle: !digiDes.toggle,
                  })
                }
                style={{
                  background: digiDes.toggle && "#4472c7",
                  color: digiDes.toggle && "white",
                }}
              >
                Digital Design
              </button>
              <button
                type="button"
                onClick={() =>
                  setConstructed({
                    value: "Constructed",
                    toggle: !constructed.toggle,
                  })
                }
                style={{
                  background: constructed.toggle && "#4472c7",
                  color: constructed.toggle && "white",
                }}
              >
                Constructed
              </button>
            </div>
          </div>
        </div>
        <div className="panel panel-default property-type">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a
                data-toggle="collapse"
                className="collapsed"
                data-parent="#accordion"
                href="#collapse10"
              >
                License Type <i className="fas fa-angle-up" />
              </a>
            </h3>
          </div>
          <div
            id="collapse10"
            className="license-type-wrap panel-collapse collapse in show"
          >
            <div className="panel-body">
              <button
                type="button"
                onClick={() =>
                  setDigiEx({
                    value: "Digital Experience",
                    toggle: !digiEx.toggle,
                  })
                }
                style={{
                  background: digiEx.toggle && "#4472c7",
                  color: digiEx.toggle && "white",
                }}
              >
                Digital Experience
              </button>
              <button
                type="button"
                onClick={() =>
                  setConstructAllowed({
                    value: "Construction Allowed",
                    toggle: !constructAllowed.toggle,
                  })
                }
                style={{
                  background: constructAllowed.toggle && "#4472c7",
                  color: constructAllowed.toggle && "white",
                }}
              >
                Construction Allowed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
