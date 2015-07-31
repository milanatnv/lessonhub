$(document).ready(function() {


var ctx6 = document.getElementById("device-type").getContext("2d");
    
    var pieChartData = [

        {
            value : 20,
            color : "#6F9BC2",
            label : "Desktop"
        },

        {
            value : 5,
            color : "#61B560",
            label : "Tablet"
        },
        {
            value : 0,
            color : "#F7BB48",
            label : "Mobile"
        }
         

        ]; 

          window.myLine = new Chart(ctx6).Doughnut(pieChartData, {
            responsive: false,
            segmentShowStroke : false,
            animationEasing: "easeOutQuart",
            percentageInnerCutout : 65,
            animationSteps : 40,
        });



var ctx = document.getElementById("visits-line").getContext("2d");


var lineChartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20","21", "22", "23", "24", "25", "26", "27","28", "29", "30","31" ],
    datasets: [
        {
            label: "Visits Line Chart",
            fillColor: "rgba(225,228,230,.50)",
            strokeColor: "#61B560",
            pointColor: "#61B560",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 66, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 29, 80, 81, 56, 55, 40, 65, 59, 80, 81, 36, 55, 40, 31, 12, 34]
        },
    ]
};

window.myLine = new Chart(ctx).Line(lineChartData, {
            responsive: true,
            tooltipFillColor: "rgba(0,0,0,0.9)",
            tooltipCornerRadius: 4,
            tooltipTemplate: "<%if (label){%><%=value%><%}%> Total Visits",
            tooltipYPadding: 16,
            tooltipXPadding: 24,
            tooltipCaretSize: 4,
            bezierCurveTension : 0.5,
            pointDot : false,
            pointHitDetectionRadius : 10,
            datasetStrokeWidth : 1,
            pointDotRadius : 2,
        });


});