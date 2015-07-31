
$(document).ready(function() {

var ctx5 = document.getElementById("new-vs-returning").getContext("2d");
    
    var pieChartData = [

         {
            value : 478,
            color : "#6F9BC2",
            label : "Returning Users"
        },

        {
            value : 109,
            color : "#61B560",
            label : "New / Direct Link"
        },
        {
            value : 123,
            color : "#F7BB48",
            label : "New / Sign-up"
        }

        ]; 

          window.myLine = new Chart(ctx5).Doughnut(pieChartData, {
            responsive: false,
            segmentShowStroke : false,
            animationEasing: "easeOutQuart",
            percentageInnerCutout : 65,
            animationSteps : 40,
        });



    var ctx6 = document.getElementById("device-type").getContext("2d");
    
    var pieChartData = [

        {
            value : 578,
            color : "#6F9BC2",
            label : "Desktop"
        },

        {
            value : 259,
            color : "#61B560",
            label : "Tablet"
        },
        {
            value : 83,
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
});
