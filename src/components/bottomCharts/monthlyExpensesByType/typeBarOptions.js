export const typeBarOptions = {
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
