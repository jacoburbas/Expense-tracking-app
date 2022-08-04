export const barOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      onHover: function(e) {
        e.native.target.style.cursor = "pointer";
      },
      onLeave: function(e) {
        e.native.target.style.cursor = "default";
      },
      labels: { boxWidth: 8, usePointStyle: true },
    },
    datalabels: {
      align: "top",
      color: "#FFF",
      textShadowBlur: 4,
      textShadowColor: "black",
      font: { family: "Nunito", size: 13 },
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
  },
};
