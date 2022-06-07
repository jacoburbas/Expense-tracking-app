import React from "react";
import "../../style/charts.css";
import BarChart from "./chartsData/BarChart";
import PieChart from "./chartsData/PieChart";

const Charts = ({ records }) => {
  return (
    <div className="charts">
      <div id="name">Expenses by type</div>
      <PieChart records={records} />
      <div id="name">Monthly Income & Expenses</div>
      <BarChart records={records} />
    </div>
  );
};

export default Charts;
