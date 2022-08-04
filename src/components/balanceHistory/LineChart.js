import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ records }) => {
  if (records) {
    const dateAccBalance = records.map((e) => [e.date, e.accState]);

    const uniqueDates = [...new Set(records.map((e) => e.date))].sort();

    const accStateDaily = [];

    uniqueDates.forEach((date) => {
      let tempBalance = dateAccBalance
        .filter((e) => e[0] === date)
        .map((e) => e[1]);
      accStateDaily.push(tempBalance[0]);
    });

    const lineData = {
      labels: uniqueDates,
      datasets: [
        {
          type: "line",
          label: "balance",
          data: accStateDaily,
          backgroundColor: "rgba(245, 90, 110, 1)",
          borderColor: "rgba(245, 90, 110, 1)",
          fill: true,
          borderWidth: 3,
          tension: 0.2,
          datalabels: {
            display: false,
          },
        },
      ],
    };

    const lineOptions = {
      maintainAspectRatio: false,
      elements: {
        point: { radius: 0, hitRadius: 10 },
      },
      scales: {
        y: {
          grid: { borderWidth: 4, display: true },
          ticks: {
            display: true,
          },
        },
        x: {
          grid: { borderWidth: 0, display: false },
          ticks: {
            display: true,
          },
        },
      },
      plugins: {
        legend: { display: false },
      },
    };

    return (
      <div className="lineChart">
        <Line data={lineData} options={lineOptions} />
      </div>
    );
  }
};

export default LineChart;
