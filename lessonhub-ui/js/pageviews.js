


$(document).ready(function() {
 
 var ctx4 = document.getElementById("bar-chartnew").getContext("2d");

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

            data: [524, 823, 230, 481, 756, 455, 540]
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
            scaleGridLineColor : "rgba(0,0,0,.03)",
          	tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
        });

});