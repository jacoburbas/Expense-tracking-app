import React from "react";
import { Doughnut } from "react-chartjs-2";
import { typesColors } from "../../exports/typesColors";
import { doughnutOptions } from "./doughnutOptions";

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
          typesColors[0].color,
          typesColors[2].color,
          typesColors[3].color,
          typesColors[4].color,
          typesColors[6].color,
          typesColors[8].color,
        ],
        borderColor: [
          typesColors[0].color,
          typesColors[2].color,
          typesColors[3].color,
          typesColors[4].color,
          typesColors[6].color,
          typesColors[8].color,
        ],
      },
    ],
  };

  return (
    <div id="dough-chart" className="chart-box">
      <Doughnut data={doughnutData} options={doughnutOptions}></Doughnut>
    </div>
  );
};

export default DoughnutChart;
