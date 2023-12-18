const ctx1 = document.getElementById("chart1");
const ctx2 = document.getElementById("chart2");
const ctx3 = document.getElementById("chart3");
const ctx4 = document.getElementById("chart4");

new Chart(ctx1, {
  type: "pie",
  data: {
    datasets: [
      {
        label: "# of Votes",
        data: [60, 40],
        borderWidth: 1,
        backgroundColor: ["#e3c246", "rgba(0,0,0,0)"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx2, {
  type: "pie",
  data: {
    datasets: [
      {
        label: "# of Votes",
        data: [60, 40],
        borderWidth: 1,
        backgroundColor: ["#e3c246", "rgba(0,0,0,0)"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx3, {
  type: "pie",
  data: {
    datasets: [
      {
        label: "# of Votes",
        data: [60, 40],
        borderWidth: 1,
        backgroundColor: ["#e3c246", "rgba(0,0,0,0)"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx4, {
  type: "pie",
  data: {
    datasets: [
      {
        label: "# of Votes",
        data: [60, 40],
        borderWidth: 1,
        backgroundColor: ["#e3c246", "rgba(0,0,0,0)"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
