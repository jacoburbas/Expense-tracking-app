import React from "react";
import BarChart from "./monthlyIncomeExpenses/BarChart";
import PieChart from "./doubleCircleGraph/PieChart";
import "../../style/charts.css";

const RightCharts = ({ records }) => {
  return (
    <div className="charts">
      <div id="name">Expenses by type</div>
      <PieChart records={records} />
      <div id="name">Monthly Income & Expenses</div>
      <BarChart records={records} />
    </div>
  );
};

export default RightCharts;
