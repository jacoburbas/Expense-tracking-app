import React from "react";
import { Pie } from "react-chartjs-2";
import { typesColors } from "../../exports/typesColors";
import { pieOptions } from "./pieOptions";
export let uniqueTypesWithExpenses = [];

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
      typesColors.forEach((grpClr) => {
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

    //add notes onHover
    const footer = (tooltipItems) => {
      let expNote = "";
      tooltipItems.forEach((e, index) => {
        if (e.datasetIndex === 1) {
          expNote = expensesNotes[e.dataIndex];
        } else {
          expNote = "";
        }
      });

      pieOptions.plugins.tooltip.callbacks.footer = footer;

      pieOptions.plugins.tooltip.callbacks.label = (e) => {
        if (e.datasetIndex === 1) {
          e.label = expenses[e.dataIndex].type;
          return e.label + ":" + e.parsed;
        } else return e.label + ":" + e.parsed;
      };

      return expNote.toString();
    };

    return (
      <div className="pie">
        <Pie datasetIdKey="id" data={pieData} options={pieOptions} />
      </div>
    );
  }
};

export default PieChart;
