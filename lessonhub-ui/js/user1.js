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


var ctx4 = document.getElementById("user-bar-chart").getContext("2d");

  var gradient = ctx4.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(97,181,96,0.4)');   
    gradient.addColorStop(1, 'rgba(97,181,96,1)');
  var barChartTwoData = {
    labels: ["Hubs", "Lessons", "Pre-Assessments", "Performance Tasks", "Standards Alignments", "Best Practices", "Evidence of Learning"],
    datasets: [
        {
            label: "Page Views",
            fillColor: gradient,
            highlightFill: "rgba(97,181,96,0.5)",

            data: [7, 25, 10, 0, 0, 0, 0]
        },
    ]
};


        window.myLine = new Chart(ctx4).Bar(barChartTwoData, {
            responsive: true,
            barShowStroke : false,
            barValueSpacing : 12,
            tooltipFillColor: "rgba(0,0,0,0.6)",
            tooltipCornerRadius: 4,
            tooltipTemplate: "<%if (label){%><%=value%><%}%> Page Views",
            tooltipYPadding: 16,
            tooltipXPadding: 24,
            tooltipCaretSize: 4,
            scaleFontFamily: "'Open Sans'",
            scaleFontSize:12,
            scaleGridLineColor : "rgba(0,0,0,.03)",
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
        });

});