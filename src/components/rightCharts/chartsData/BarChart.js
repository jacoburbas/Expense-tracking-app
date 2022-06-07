import React from "react";
import { Bar } from "react-chartjs-2";

export const BarLabels = [];
export const monthlyExpenses = [];
export const monthlyIncome = [];
export let uniqueMonths = [];

const BarChart = ({ records }) => {
  if (records) {
    uniqueMonths = [
      ...new Set(
        records
          .map((e) => {
            return e.date;
          })
          .map((e) => {
            return e[5] + e[6];
          })
      ),
    ].sort();

    let uniqueMonthsWithExp = [];

    uniqueMonths.forEach((month) => {
      uniqueMonthsWithExp.push(
        ...new Set(
          records
            .filter((e) => {
              return e.date[5] + e.date[6] === month && e.checked === false;
            })
            .map((e) => {
              return e.date[5] + e.date[6];
            })
        )
      );
    });

    const uniqueMonthsWithInc = [];

    uniqueMonths.forEach((month) => {
      uniqueMonthsWithInc.push(
        ...new Set(
          records
            .filter((e) => {
              return e.date[5] + e.date[6] === month && e.checked === true;
            })
            .map((e) => {
              return e.date[5] + e.date[6];
            })
        )
      );
    });

    const monthsNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    uniqueMonths.forEach((e) => {
      BarLabels.push(monthsNames[parseInt(e) - 1]);
    });

    uniqueMonthsWithExp.forEach((month) => {
      monthlyExpenses.push(
        records
          .filter((e) => {
            return (e.date[5] + e.date[6] === month) & (e.checked === false);
          })
          .map((e) => {
            return e.amount;
          })
          .reduce((a, b) => {
            return a + b;
          })
      );
    });

    uniqueMonthsWithInc.forEach((month) => {
      monthlyIncome.push(
        records
          .filter((e) => {
            return (e.date[5] + e.date[6] === month) & (e.checked === true);
          })
          .map((e) => {
            return e.amount;
          })
          .reduce((a, b) => {
            return a + b;
          })
      );
    });
  }

  const barData = {
    labels: BarLabels,
    datasets: [
      {
        label: "Income",
        data: monthlyIncome,
        backgroundColor: "rgba(40, 160, 170, 1)",
        borderColor: "rgba(40, 160, 170, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: monthlyExpenses,
        backgroundColor: "rgba(245, 90, 110, 1)",
        borderColor: "rgba(245, 90, 110, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    plugins: {
      legend: {
        labels: { boxWidth: 8, usePointStyle: true },
      },
      datalabels: {
        align: "top",
        color: "#FFF",
        textShadowBlur: 4,
        textShadowColor: "black",
        font: { family: "Nunito", size: 13 },
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
          display: true,
        },
      },
    },
  };

  return (
    <div className="bar">
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default BarChart;
