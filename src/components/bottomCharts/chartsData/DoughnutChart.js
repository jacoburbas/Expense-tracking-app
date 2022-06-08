import React from "react";
import { Doughnut } from "react-chartjs-2";
import { groupsColors } from "../../rightCharts/chartsData/PieChart";

const DoughnutChart = ({ records }) => {
  //
  const uniqueIncomeTypes = [
    ...new Set(
      records
        .filter((e) => (e.checked === true) & (e.type !== "Starting amount"))
        .map((e) => e.type)
    ),
  ];

  let incomeDataGrouped = [];

  uniqueIncomeTypes.forEach((type) => {
    incomeDataGrouped.push(
      records
        .filter((e) => e.type === type)
        .map((e) => e.amount)
        .reduce((a, b) => a + b)
    );
  });

  const doughnutData = {
    labels: uniqueIncomeTypes,
    datasets: [
      {
        label: "Income Total",
        data: incomeDataGrouped,
        backgroundColor: [
          groupsColors[0].color,
          groupsColors[2].color,
          groupsColors[3].color,
          groupsColors[4].color,
          groupsColors[6].color,
          groupsColors[8].color,
        ],
        borderColor: [
          groupsColors[0].color,
          groupsColors[2].color,
          groupsColors[3].color,
          groupsColors[4].color,
          groupsColors[6].color,
          groupsColors[8].color,
        ],
      },
    ],
  };

  const doughnutOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { boxWidth: 8, usePointStyle: true },
      },
      datalabels: {
        color: "#FFF",
        textShadowBlur: 2,
        textShadowColor: "black",
        font: { family: "Nunito", size: 13 },
        formatter: function(value, context) {
          return (
            (
              (value /
                context.dataset.data.reduce((a, b) => {
                  return a + b;
                })) *
              100
            ).toFixed(0) + "%"
          );
        },
      },
    },
  };

  return (
    <div id="dough-chart" className="chart-box">
      <Doughnut data={doughnutData} options={doughnutOptions}></Doughnut>
    </div>
  );
};

export default DoughnutChart;
