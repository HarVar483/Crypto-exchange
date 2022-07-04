import React from "react";
// import { Line } from '@ant-design/charts';
import { Area } from "@ant-design/charts";

const Chart = () => {
  const data = [
    { year: "Jan", value: 3 },
    { year: "Feb", value: 7 },
    { year: "March", value: 4 },
    { year: "April", value: 9 },
    { year: "May", value: 12 },
    { year: "Jun", value: 6 },
    { year: "July", value: 13 },
    { year: "Augest", value: 12 },
    { year: "Sept", value: 6 },
    { year: "Oct", value: 13 },
  ];
  const config = {
    data,
    xField: "year",
    yField: "value",
    // yAxis: true,
    // smooth: true,
    color: "#6f56ba",
    height: 300,
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h5
          style={{
            transform: "rotate(270deg)",
            marginRight: "auto",
            height: "100%",
            marginTop: "auto",
            marginBottom: "auto",
            fontWeight: "300",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          No. of user
        </h5>

        <Area {...config} style={{ width: "90%", marginLeft: "auto" }} />
      </div>
      <h5 style={{ fontWeight: "300" }}>Time Period </h5>
    </>
  );
};

export default Chart;
