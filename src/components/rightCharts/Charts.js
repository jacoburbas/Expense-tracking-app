import React from "react";
import BarChart from "./chartsData/BarChart";
import PieChart from "./chartsData/PieChart";
import "../../style/charts.css";

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
