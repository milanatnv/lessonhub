
// Select all filter functionality for top header
// $(document).ready(function() {
//     $('#filter-button').click(function(event) {  //on click 
//         $( "#filter-button" ).addClass('filter-button-custom' );
//     });  
// });

$(document).ready(function() {
    $('.filter-button').click(function () {
    $(this).toggleClass("filter-button-custom");
    }); 
});


// Custom Checkboxes

$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_flat-green',
    radioClass: 'iradio_flat-green'
  });

  $('#selectall').on('ifClicked', function(event){
    if(this.checked) {
    $('.state-checkbox').iCheck('uncheck');
    }else{
    $('.state-checkbox').iCheck('uncheck');
    }
    });


  $('.state-checkbox').on('ifToggled', function(event) {
    if('.state-checkbox'.checked) {
    $('#selectall').iCheck('check');
    }else{
    $('#selectall').iCheck('uncheck');
    }
    });

  $('#selectallcourses').on('ifClicked', function(event){
    if(this.checked) {
    $('.course-checkbox').iCheck('uncheck');
    }else{
    $('.course-checkbox').iCheck('uncheck');
    }
    });

  $('.course-checkbox').on('ifToggled', function(event) {
    if('.course-checkbox'.checked) {
    $('#selectallcourses').iCheck('check');
    }else{
    $('#selectallcourses').iCheck('uncheck');
    }
    });


});





// Ability to make entire table rows clickable
$(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
});


// Calendar start/end dates and functionality
$(document).ready(function() {

var startDate = new Date(2015,2,15);
var endDate = new Date(2015,2,20);
$('#date-start')
    .datepicker()
    .on('changeDate', function(ev){
        if (ev.date.valueOf() > endDate.valueOf()){
            $('#alert').show().find('strong').text('The start date must be before the end date.');
        } else {
            $('#alert').hide();
            startDate = new Date(ev.date);
            $('#date-start-display').text($('#date-start').data('date'));
        }
        $('#date-start').datepicker('hide');
    });
$('#date-end')
    .datepicker()
    .on('changeDate', function(ev){
        if (ev.date.valueOf() < startDate.valueOf()){
            $('#alert').show().find('strong').text('The end date must be after the start date.');
        } else {
            $('#alert').hide();
            endDate = new Date(ev.date);
            $('#date-end-display').text($('#date-end').data('date'));
        }
        $('#date-end').datepicker('hide');
    });
});



window.onload = function(){


var ctx = document.getElementById("visits-line").getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(97,181,96,0.1)');   
    gradient.addColorStop(1, 'rgba(97,181,96,1)');    

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
            data: [35, 39, 40, 41, 52, 45, 50, 45, 59, 60, 53, 46, 65, 60, 75, 59, 60, 61, 56, 55, 50, 65, 59, 60, 81, 76, 45, 47, 67, 62, 64]
        },
    ]
};

var pieChartData = [

    {
        value : 467,
        color : "#61B560",
        label : "Pre-Assessments"
    },
    {
        value : 954,
        color : "#F7BB48",
        label : "Standards Alignments"
    },
     {
        value: 589,
        color:"#F15A29",
        label : "Performance Tasks"
    },
     {
        value : 1557,
        color : "#6F9BC2",
        label : "Lessons"
    }

];


var ctx2 = document.getElementById("content-group").getContext("2d");

var gradient = ctx2.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(97,181,96,0.3)');   
    gradient.addColorStop(1, 'rgba(97,181,96,1)');

var barChartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20","21", "22", "23", "24", "25", "26", "27","28", "29", "30","31" ],
    datasets: [
        {
            label: "My First dataset",
            fillColor: gradient,
            
            highlightFill: "rgba(97,181,96,0.5)",
            
            data: [65, 59, 80, 81, 26, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 29, 80, 81, 56, 55, 40, 65, 59, 80, 81, 36, 55, 40, 31, 12, 34]
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
        

        window.myLine = new Chart(ctx2).Doughnut(pieChartData, {
            responsive: true,
            segmentShowStroke : false,
            animationEasing: "easeOutQuart",
            percentageInnerCutout : 70,
            animationSteps : 40,
        });
        var ctx3 = document.getElementById("duration-group").getContext("2d");
        window.myLine = new Chart(ctx3).Bar(barChartData, {
            responsive: true,
            barShowStroke : false,
            barValueSpacing : 2,
        });
	};


