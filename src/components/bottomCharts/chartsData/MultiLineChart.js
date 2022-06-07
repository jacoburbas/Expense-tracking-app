import React from "react";
import { Bar } from "react-chartjs-2";
import { BarLabels, uniqueMonths } from "../../rightCharts/chartsData/BarChart";
import { uniqueTypesWithExpenses } from "../../rightCharts/chartsData/PieChart";
import { groupsColors } from "../../rightCharts/chartsData/PieChart";

const MultiLineChart = ({ records }) => {
  const dataObj = [
    {
      type: "Clothes",
      data: [],
    },
    {
      type: "Electronics",
      data: [],
    },
    {
      type: "Food & Drinks",
      data: [],
    },
    {
      type: "Health",
      data: [],
    },

    {
      type: "Hobbys",
      data: [],
    },

    {
      type: "Home & Utilities",
      data: [],
    },
    {
      type: "Other",
      data: [],
    },
    {
      type: "Rent",
      data: [],
    },
    {
      type: "Transport",
      data: [],
    },
  ];

  //for every type add monthly expenses to the dataObj

  dataObj.forEach((object) => {
    uniqueTypesWithExpenses.forEach((type) => {
      if (object.type === type) {
        uniqueMonths.forEach((month) => {
          records.filter((e) => {
            return (
              e.date[5] + e.date[6] === month &&
              e.checked === false &&
              e.type === type
            );
          }).length
            ? object.data.push(
                records
                  .filter((e) => {
                    return (
                      e.date[5] + e.date[6] === month &&
                      e.checked === false &&
                      e.type === type
                    );
                  })
                  .map((e) => {
                    return e.amount;
                  })
                  .reduce((a, b) => {
                    return a + b;
                  })
              )
            : object.data.push(0);
        });
      }
    });
  });

  const options = {
    maintainAspectRatio: false,
    stacked: true,
    plugins: {
      legend: {
        labels: { boxWidth: 8, usePointStyle: true },
      },
      datalabels: {
        display: false,
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

  const data = {
    labels: BarLabels,
    datasets: [
      {
        label: "Clothes",
        data: dataObj[0].data,
        borderColor: groupsColors[0].color,
        backgroundColor: groupsColors[0].color,
        tension: 0.3,
      },
      {
        label: "Electronics",
        data: dataObj[1].data,
        borderColor: groupsColors[1].color,
        backgroundColor: groupsColors[1].color,
        tension: 0.3,
      },
      {
        label: "Food & Drinks",
        data: dataObj[2].data,
        borderColor: groupsColors[2].color,
        backgroundColor: groupsColors[2].color,
        tension: 0.3,
      },
      {
        label: "Health",
        data: dataObj[3].data,
        borderColor: groupsColors[3].color,
        backgroundColor: groupsColors[3].color,
        tension: 0.3,
      },
      {
        label: "Hobbys",
        data: dataObj[4].data,
        borderColor: groupsColors[4].color,
        backgroundColor: groupsColors[4].color,
        tension: 0.3,
      },
      {
        label: "Home & Utilities",
        data: dataObj[5].data,
        borderColor: groupsColors[5].color,
        backgroundColor: groupsColors[5].color,
        tension: 0.3,
      },
      {
        label: "Other",
        data: dataObj[6].data,
        borderColor: groupsColors[6].color,
        backgroundColor: groupsColors[6].color,
        tension: 0.3,
      },
      {
        label: "Rent",
        data: dataObj[7].data,
        borderColor: groupsColors[7].color,
        backgroundColor: groupsColors[7].color,
        tension: 0.3,
      },
      {
        label: "Transport",
        data: dataObj[8].data,
        borderColor: groupsColors[8].color,
        backgroundColor: groupsColors[8].color,
        tension: 0.3,
      },
    ],
  };

  return (
    <div id="multi-line-chart" className="chart-box">
      <Bar options={options} data={data} />
    </div>
  );
};

export default MultiLineChart;
