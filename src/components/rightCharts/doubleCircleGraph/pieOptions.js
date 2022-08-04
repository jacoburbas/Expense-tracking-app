export const pieOptions = {
  maintainAspectRatio: false,
  plugins: {
    responsive: true,
    datalabels: {
      textShadowBlur: 4,
      textShadowColor: "black",
      color: "#FFF",
      font: { family: "Nunito", size: 13 },
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
  },
};
