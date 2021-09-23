let labels = [];
let data = [];

function getPercentageAndCategories(percentage) {
  //chart.update(); //update after new data
  labels
  data
}



let ctx = document.getElementById("myChart").getContext("2d");

// let labels = ["Lön", "CSN", "Bidrag", "Rånbyte"];
let colorHex = ["#BDE4DD", "rgba(255,184,0, 0.5)", "#DDE6FB", "#FF977C"];


let myChart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [15, 10, 5, 77.85698644801829],
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
  },
});

// PopupView Income

const addIncomeView = document.getElementsByClassName("income-btn");
