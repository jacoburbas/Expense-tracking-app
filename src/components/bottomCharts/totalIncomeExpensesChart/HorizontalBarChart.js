import React from "react";
import { Bar } from "react-chartjs-2";
import { horizontalBarOptions } from "./HorizontalBarOptions";
const TotalChart = ({ records }) => {
  let totalExpenses = [];

  const expenseRecords = records.filter((e) => e.checked === false);

  if (expenseRecords.length) {
    totalExpenses = records
      .filter((e) => e.checked === false)
      .map((e) => e.amount)
      .reduce((a, b) => a + b);
  }

  let totalIncome = [];

  const incomeRecords = records.filter(
    (e) => (e.checked === true) & (e.type !== "Starting amount")
  );

  if (incomeRecords.length) {
    totalIncome = records
      .filter((e) => e.checked === true)
      .map((e) => e.amount)
      .reduce((a, b) => a + b);
  }

  const horizontalBarData = {
    labels: [""],
    datasets: [
      {
        label: "Income Total",
        data: [totalIncome],
        borderColor: "rgba(40, 160, 170, 1)",
        backgroundColor: "rgba(40, 160, 170, 1)",
      },
      {
        label: "Expenses Total",
        data: [totalExpenses],
        borderColor: "rgba(245, 90, 110, 1)",
        backgroundColor: "rgba(245, 90, 110, 1)",
      },
    ],
  };

  return (
    <div id="bar-chart" className="chart-box">
      <Bar data={horizontalBarData} options={horizontalBarOptions}></Bar>
    </div>
  );
};
export default TotalChart;
