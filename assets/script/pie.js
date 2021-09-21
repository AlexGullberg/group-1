let ctx = document.getElementById("myChart").getContext("2d");
let labels = ["lön","csn","bidrag","rånbyte"];
let colorHex = ["#BDE4DD","rgba(255,184,0, 0.5)","#DDE6FB","#FF977C"];

let myChart = new Chart(ctx, {
    type: "pie",
    data: {
        datasets: [{
            data: [15,10,5,70],
            backgroundColor: colorHex
        }],
        labels: labels
    },
    options:{
        responsive:true,
        legend: {
            position: "bottom"
        }
    }

})