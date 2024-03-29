export const doughnutOptions = {
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
      color: "#FFF",
      textShadowBlur: 2,
      textShadowColor: "black",
      font: { family: "Nunito", size: 13 },
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
  },
};
