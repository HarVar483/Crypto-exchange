const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "black",
    padding: 7,
    margin: "0px",
    background: "white",
    ":hover": {
      background: "#6f56ba",
      color: "white",
    },
    boxShadow: "none",
  }),
  indicatorSeparator: () => ({
    border: "none",
    color: "black",
  }),
  dropdownIndicator: () => ({
    color: "black",
    paddingRight: ".5em",
  }),
  control: (provided, state) => ({
    ...provided,
    background: "white",
    // border: "0px solid",
    borderRadius: "8px",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
    padding: "7px",
    marginTop: "-3px",
    width: "135px",
  }),
  input: () => ({
    margin: "0px",
  }),
  menu: (provided, state) => ({
    ...provided,
    // background: "#e8e9e9",
    margin: "5px 0px",
    borderColor: "#ced4da",
    borderRadius: "8px",
    padding: "0px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

export default customStyles;
