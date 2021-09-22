let ctx = document.getElementById("myChart").getContext("2d");
let labels = ["Lön","Bidrag", "Rånbyte"];
let colorHex = ["#BDE4DD", "rgba(255,184,0, 0.5)", "#DDE6FB", "#FF977C"];

let myChart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [15, 0, 5, 70],
        backgroundColor: colorHex,
      },
    ],
    labels: labels,
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      datalabels: {
        color: "#000000",
        anchor: "end",
        align: "start",
        offset: -10,
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
          size: "10",
        },
        formatter: (value) => {
          return value + "%";
        },
      },
    },
  },
});
