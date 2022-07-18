import React from "react";
import { Pie } from "react-chartjs-2";

export let uniqueTypesWithExpenses = [];

export const groupsColors = [
  { name: "Clothes", color: "rgba(255, 243, 120, 1)" }, //0
  { name: "Electronics", color: "rgba(255, 154, 100, 1)" }, //1
  { name: "Food & Drinks", color: "rgba(238, 110, 90, 1)" }, //2
  { name: "Health", color: "rgba(219, 64, 144, 1)" }, //3
  { name: "Hobbys", color: "rgba(170,75,220,1)" }, //4
  { name: "Home & Utilities", color: "rgba(90, 90, 167, 1)" }, //5
  { name: "Other", color: "rgba(20, 112, 167, 1)" }, //6
  { name: "Rent", color: "rgba(30, 140, 158, 1)" }, //7
  { name: "Transport", color: "rgba(115,169,187,1)" }, //8
];

const PieChart = ({ records }) => {
  if (records) {
    const sortedRecords = records
      .slice()
      .sort((a, b) => a.type.localeCompare(b.type));

    const TypesWithExpenses = sortedRecords
      .filter((e) => e.checked === false)
      .map((e) => e.type);

    uniqueTypesWithExpenses = [...new Set(TypesWithExpenses)];

    let chartDataGrouped = [];

    uniqueTypesWithExpenses.forEach((type) => {
      chartDataGrouped.push(
        sortedRecords
          .filter((e) => e.type === type && e.checked === false)
          .map((e) => e.amount)
          .reduce((a, b) => a + b)
      );
    });

    let chartDataDetails = sortedRecords
      .filter((e) => e.checked === false)
      .map((e) => e.amount);

    let expensesNotes = sortedRecords
      .filter((e) => e.checked === false)
      .map((e) => e.note);

    let expenses = sortedRecords.filter((e) => e.checked === false);

    // charts colors

    const darkenColor = function(color) {
      let rgba = color;

      rgba = rgba.replace(/[^\d,]/g, "").split(",");

      rgba.forEach((e, index) => {
        rgba[index] = (e * 0.98).toFixed();
      });
      return (
        "rgba(" +
        rgba[0] +
        ", " +
        rgba[1] +
        ", " +
        rgba[2] +
        ", " +
        rgba[3] +
        ")"
      );
    };

    const ungroupedColorsArray = [];

    const groupedColorsArray = [];

    uniqueTypesWithExpenses.forEach((e, index) => {
      //grouped expenses background colors
      groupsColors.forEach((grpClr) => {
        if (grpClr.name === e) groupedColorsArray.push(grpClr.color);
      });

      //color darkening

      // counting how many records by type there are
      const counts = [];

      TypesWithExpenses.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
      });

      let tempColor = darkenColor(groupedColorsArray[index]);

      for (let i = 0; i < counts[e]; i++) {
        ungroupedColorsArray.push(tempColor);
        tempColor = darkenColor(tempColor);
      }
    });

    const pieData = {
      labels: uniqueTypesWithExpenses,
      datasets: [
        {
          radius: 0.1,
          data: chartDataGrouped,
          backgroundColor: groupedColorsArray,
          borderColor: groupedColorsArray,
          datalabels: {
            display: false,
          },
        },
        {
          radius: 240,
          cutout: 80,
          type: "doughnut",
          id: 2,
          data: chartDataDetails,
          backgroundColor: ungroupedColorsArray,
          borderColor: ungroupedColorsArray,
          borderWidth: 1,
          datalabels: {
            display: false,
          },
        },
        {
          radius: 350,
          type: "pie",
          id: 1,
          data: chartDataGrouped,
          backgroundColor: groupedColorsArray,
          borderColor: groupedColorsArray,
          borderWidth: 1,
        },
      ],
    };

    const footer = (tooltipItems) => {
      let expNote = "";
      tooltipItems.forEach((e, index) => {
        if (e.datasetIndex === 1) {
          expNote = expensesNotes[e.dataIndex];
        } else {
          expNote = "";
        }
      });
      return expNote.toString();
    };

    const pieOptions = {
      maintainAspectRatio: false,
      plugins: {
        responsive: true,
        datalabels: {
          textShadowBlur: 4,
          textShadowColor: "black",
          color: "#FFF",
          font: { family: "Nunito", size: 15 }, // CHART FONT
          // percentage calculation
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
        legend: {
          labels: { boxWidth: 8, usePointStyle: true },
          onClick: function() {}, //disabling onClick function
          position: "top",
        },

        tooltip: {
          callbacks: {
            footer: footer,
            label: (e) => {
              if (e.datasetIndex === 1) {
                e.label = expenses[e.dataIndex].type;
                return e.label + ":" + e.parsed;
              } else return e.label + ":" + e.parsed;
            },
          },
        },
      },
    };

    return (
      <div className="pie">
        <Pie datasetIdKey="id" data={pieData} options={pieOptions} />
      </div>
    );
  }
};

export default PieChart;
