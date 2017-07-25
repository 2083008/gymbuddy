console.log("included");

function main() {
    test = get_lift_ratios()
    drawChart(test);
}

function get_lift_ratios() {
    var ideal_squat = 0.333;
    var ideal_bench = 0.25;
    var ideal_deadlift = 0.416667;

    ratios = {};
    var squat = Number(document.getElementById("squat").value);
    var bench = Number(document.getElementById("bench").value);
    var deadlift = Number(document.getElementById("deadlift").value);
    var ohp = Number(document.getElementById("ohp").value);

    var total = squat + bench + deadlift;
    var sqwat = squat/total;
    console.log(sqwat);
    ratios.squat = (squat/total) - ideal_squat;
    ratios.bench = (bench/total) - ideal_bench;
    ratios.deadlift = (deadlift/total) - ideal_deadlift;

    console.log(ratios);
    return ratios;

}

google.charts.load("current", {packages:["corechart"]});

function drawChart(ratios) {
    
    console.log(ratios);
  var data = google.visualization.arrayToDataTable([
    ["Squa", "Density", { role: "style" } ],
    ["Bench", ratios.bench, "#b87333"],
    ["Deadlift", ratios.deadlift, "silver"],
    ["Squat", ratios.squat, "gold"],
  ]);

  console.log(data);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Balance of lifts",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
}
