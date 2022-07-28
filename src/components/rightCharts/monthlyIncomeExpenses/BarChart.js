import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { monthsNames } from "../../exports/dateVariables";
import { barOptions } from "./barOptions";

export let BarLabels = [];
export let monthlyExpenses = [];
export let monthlyIncome = [];
export let uniqueMonths = [];

const BarChart = ({ records }) => {
  useEffect(() => {
    BarLabels = [];
    monthlyExpenses = [];
    monthlyIncome = [];
    uniqueMonths = [];
  });

  if (records) {
    uniqueMonths = [
      ...new Set(records.map((e) => e.date).map((e) => e[5] + e[6])),
    ].sort();

    const uniqueMonthsWithExp = [];

    uniqueMonths.forEach((month) => {
      uniqueMonthsWithExp.push(
        ...new Set(
          records
            .filter(
              (e) => (e.date[5] + e.date[6] === month) & (e.checked === false)
            )
            .map((e) => e.date[5] + e.date[6])
        )
      );
    });

    const uniqueMonthsWithInc = [];

    uniqueMonths.forEach((month) => {
      uniqueMonthsWithInc.push(
        ...new Set(
          records
            .filter(
              (e) =>
                (e.date[5] + e.date[6] === month) &
                (e.checked === true) &
                (e.type !== "Starting amount")
            )
            .map((e) => e.date[5] + e.date[6])
        )
      );
    });

    //bar labels
    uniqueMonths.forEach((e) => {
      BarLabels.push(monthsNames[parseInt(e) - 1]);
    });

    //monthly expenses
    uniqueMonthsWithExp.forEach((month) => {
      monthlyExpenses.push(
        records
          .filter(
            (e) => (e.date[5] + e.date[6] === month) & (e.checked === false)
          )
          .map((e) => e.amount)
          .reduce((a, b) => a + b)
      );
    });

    //monthly income
    uniqueMonthsWithInc.forEach((month) => {
      monthlyIncome.push(
        records
          .filter(
            (e) =>
              (e.date[5] + e.date[6] === month) &
              (e.checked === true) &
              (e.type !== "Starting amount")
          )
          .map((e) => e.amount)
          .reduce((a, b) => a + b)
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
      },
      {
        label: "Expenses",
        data: monthlyExpenses,
        backgroundColor: "rgba(245, 90, 110, 1)",
        borderColor: "rgba(245, 90, 110, 1)",
      },
    ],
  };

  return (
    <div className="bar">
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default BarChart;
