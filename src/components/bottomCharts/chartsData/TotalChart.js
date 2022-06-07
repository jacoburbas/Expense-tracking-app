import React from "react";
import { Bar } from "react-chartjs-2";

const TotalChart = ({ records }) => {
  let totalExpenses = [];
  let totalIncome = [];

  records.filter((e) => {
    return e.checked === false;
  }).length
    ? (totalExpenses = records
        .filter((e) => {
          return e.checked === false;
        })
        .map((e) => {
          return e.amount;
        })
        .reduce((a, b) => {
          return a + b;
        }))
    : console.log("");

  records.filter((e) => {
    return e.checked === true;
  }).length
    ? (totalIncome = records
        .filter((e) => {
          return e.checked === true;
        })
        .map((e) => {
          return e.amount;
        })
        .reduce((a, b) => {
          return a + b;
        }))
    : console.log("");

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

  const horizontalBarOptions = {
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      datalabels: {
        color: "#FFF",
        textShadowBlur: 2,
        textShadowColor: "black",
        font: { family: "Nunito", size: 13 },
      },
      legend: {
        labels: { boxWidth: 8, usePointStyle: true },
      },
    },
    scales: {
      y: {
        grid: { display: false },
        ticks: {
          display: true,
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div id="bar-chart" className="chart-box">
      <Bar data={horizontalBarData} options={horizontalBarOptions}></Bar>
    </div>
  );
};
export default TotalChart;
