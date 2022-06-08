import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../style/balance/balance.css";

const Balance = ({ records }) => {
  useEffect(() => {
    setCurrentBalance(records[0].accState);
  });

  const [currentBalance, setCurrentBalance] = useState();

  if (records) {
    //accBalance history chart
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
      <div className="balance">
        <div className="card-box">
          <div className="card-box-1">
            <div id="chip"></div>

            <div id="current-balance">
              <div id="label">Balance:</div>
              <div id="amount-box">
                {currentBalance}
                <div id="currency">Pln</div>
              </div>
            </div>
          </div>
          <div className="card-box-2">
            **** **** **** <span>1234</span>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    );
  }
};
export default Balance;
