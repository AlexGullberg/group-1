let labels = [];
let data = [];

function getPercentageAndCategories(percentage) {
  for (const key in percentage) {
    //console.log(`${key}: ${incomeCategoryValues[key]}`);
    labels.push(key)
    data.push(percentage[key])
  }
  //chart.update(); //update after new data
  myChart.update()
}

let ctx = document.getElementById("myChart").getContext("2d");


let colorHex = ["#BDE4DD", "rgba(255,184,0, 0.5)", "#DDE6FB", "#FF977C"];


let myChart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [
      {
        data: data,
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
