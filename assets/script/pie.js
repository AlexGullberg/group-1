let ctx = document.getElementById("myChart").getContext("2d");
let labels = ["lön","csn","bidrag","rånbyte"];
let colorHex = ["#FB3640","#EFCA08","#43AA8B","#253D5B"];

let myChart = new Chart(ctx, {
    type: "pie",
    data: {
        datasets: [{
            data: [30,10,15,45],
            backgroundColor: colorHex
        }],
        labels: labels
    },
    Options:{
        responsive:true
    }

})