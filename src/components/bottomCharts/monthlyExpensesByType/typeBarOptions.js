export const typeBarOptions = {
  maintainAspectRatio: false,
  stacked: true,
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
