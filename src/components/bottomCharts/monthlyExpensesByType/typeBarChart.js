import React from "react";
import { Bar } from "react-chartjs-2";
import { typesColors } from "../../exports/typesColors";
import {
  BarLabels,
  uniqueMonths,
} from "../../rightCharts/monthlyIncomeExpenses/BarChart";
import { uniqueTypesWithExpenses } from "../../rightCharts/doubleCircleGraph/PieChart";
import { typeBarOptions } from "./typeBarOptions";

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
                  .map((e) => e.amount)
                  .reduce((a, b) => a + b)
              )
            : object.data.push(0);
        });
      }
    });
  });

  const data = {
    labels: BarLabels,
    datasets: [
      {
        label: "Clothes",
        data: dataObj[0].data,
        borderColor: typesColors[0].color,
        backgroundColor: typesColors[0].color,
        tension: 0.3,
      },
      {
        label: "Electronics",
        data: dataObj[1].data,
        borderColor: typesColors[1].color,
        backgroundColor: typesColors[1].color,
        tension: 0.3,
      },
      {
        label: "Food & Drinks",
        data: dataObj[2].data,
        borderColor: typesColors[2].color,
        backgroundColor: typesColors[2].color,
        tension: 0.3,
      },
      {
        label: "Health",
        data: dataObj[3].data,
        borderColor: typesColors[3].color,
        backgroundColor: typesColors[3].color,
        tension: 0.3,
      },
      {
        label: "Hobbys",
        data: dataObj[4].data,
        borderColor: typesColors[4].color,
        backgroundColor: typesColors[4].color,
        tension: 0.3,
      },
      {
        label: "Home & Utilities",
        data: dataObj[5].data,
        borderColor: typesColors[5].color,
        backgroundColor: typesColors[5].color,
        tension: 0.3,
      },
      {
        label: "Other",
        data: dataObj[6].data,
        borderColor: typesColors[6].color,
        backgroundColor: typesColors[6].color,
        tension: 0.3,
      },
      {
        label: "Rent",
        data: dataObj[7].data,
        borderColor: typesColors[7].color,
        backgroundColor: typesColors[7].color,
        tension: 0.3,
      },
      {
        label: "Transport",
        data: dataObj[8].data,
        borderColor: typesColors[8].color,
        backgroundColor: typesColors[8].color,
        tension: 0.3,
      },
    ],
  };

  return (
    <div id="multi-line-chart" className="chart-box">
      <Bar options={typeBarOptions} data={data} />
    </div>
  );
};

export default MultiLineChart;
