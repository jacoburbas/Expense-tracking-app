import React from "react";
import TotalChart from "./totalIncomeExpensesChart/HorizontalBarChart";
import DoughnutChart from "./incomeByType/DoughnutChart";
import MultiLineChart from "./monthlyExpensesByType/typeBarChart";
import "../../style/moreCharts.css";

const BottomCharts = ({ records }) => {
  return (
    <div className="moreCharts">
      <div className="chart-block">
        <div id="name">Total Income & Expenses</div>
        <TotalChart records={records} />
      </div>
      <div className="chart-block">
        <div id="name">Monthly Expenses by type</div>
        <MultiLineChart records={records} />
      </div>
      <div className="chart-block">
        <div id="name">Income by type</div>
        <DoughnutChart records={records} />
      </div>
    </div>
  );
};

export default BottomCharts;
