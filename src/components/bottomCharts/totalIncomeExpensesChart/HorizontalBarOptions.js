export const horizontalBarOptions = {
  maintainAspectRatio: false,
  indexAxis: "y",
  plugins: {
    datalabels: {
      color: "#FFF",
      textShadowBlur: 2,
      textShadowColor: "black",
      font: { family: "Nunito", size: 13 },
    },
    legend: {
      labels: { boxWidth: 8, usePointStyle: true },
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
        display: false,
      },
    },
  },
};
