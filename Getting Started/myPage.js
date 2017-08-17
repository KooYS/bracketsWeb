google.charts.load("current", {packages:['corechart']});

var chart1;
var chart2_1;
var chart2_2;

function Chart1() {
    google.charts.setOnLoadCallback(drawChart);
}

function Chart2() {
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);
}
function ClearChart1(){
    chart1.clearChart();
}
function ClearChart2(){
     chart2_1.clearChart();
     chart2_2.clearChart();
}

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['연도', '어획량'],
        ['2012', 737],
        ['2013', 749],
        ['2014', 842],
        ['2015', 931]
      ]);
      var options = {
        title: "수산물 어획량",
        width: 600,
        height: 400,
        bar: {groupWidth: '95%'},
        legend: { position: 'none' },
        backgroundColor: 'none',
          animation: {
            duration: 3000,
            easing: 'out',
            startup: true
        },
      };
      chart1 = new google.visualization.ColumnChart(document.getElementById('chart1'));
      chart1.draw(data, options);
  }


function drawChart2() {
  var data = google.visualization.arrayToDataTable([
          ['Pac Man', 'Percentage'],
          ['UN', 0],
          ['', 100]
        ]);

        var options = {
          legend: 'none',
         pieSliceText: 'none',
          pieStartAngle: 135,
          tooltip: { trigger: 'none' },
          slices: {
            0: { color: 'black' },
            1: { color: 'transparent' }
          },
             backgroundColor: 'none'
        };

        chart2_1 = new google.visualization.PieChart(document.getElementById('chart2_1'));
        chart2_1.draw(data, options);
    var percent = 0;
var handler = setInterval(function(){
    // values increment
    percent += 1;
    // apply new values
    data.setValue(0, 1, percent);
    data.setValue(1, 1, 100 - percent);
    // update the pie
    chart2_1.draw(data, options);
    // check if we have reached the desired value
    if (percent > 99)
        // stop the loop
        clearInterval(handler);
}, 15);
    
}

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
          ['Pac Man', 'Percentage'],
          ['북한', 0],
          ['', 100]
        ]);

        var options = {
          legend: 'none',
         pieSliceText: 'none',
         pieStartAngle: 135,
        tooltip: { trigger: 'none' },
          slices: {
            0: { color: 'black' },
            1: { color: 'transparent' }
          },
             backgroundColor: 'none'
        };

        chart2_2 = new google.visualization.PieChart(document.getElementById('chart2_2'));
        chart2_2.draw(data, options);
    var percent = 0;
var handler = setInterval(function(){
    // values increment
    percent += 1;
    // apply new values
    data.setValue(0, 1, percent);
    data.setValue(1, 1, 100 - percent);
    // update the pie
    chart2_2.draw(data, options);
    // check if we have reached the desired value
    if (percent > 99)
        // stop the loop
        clearInterval(handler);
}, 15);
    
}

/*
function drawChart2() {

var data = new google.visualization.DataTable();
data.addColumn('string', 'text');
data.addColumn('number', 'number');

data.addRows(2);
data.setValue(0, 0, 'Work');
data.setValue(0, 1, 0.0);
data.setValue(1, 0, 'Eat');
data.setValue(1, 1, 100.0);

var options = {
    width:500,
    height:500,
    backgroundColor: 'none'
};

var chart = new google.visualization.PieChart(document.getElementById('columnchart_material2'));
chart.draw(data, options);

var percent = 0;
var handler = setInterval(function(){
    // values increment
    percent += 1;
    // apply new values
    data.setValue(0, 1, percent);
    data.setValue(1, 1, 100 - percent);
    // update the pie
    chart.draw(data, options);
    // check if we have reached the desired value
    if (percent > 74)
        // stop the loop
        clearInterval(handler);
}, 30);

}
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function () {
    $(".mapWrap.lazy").click(function () {
        $(".mapWrap.lazy").animate({
            left: '-500px',
            top: '-500px'
        }, 500);

    });
});



$('#chart1').animate({
                left: '-400px',
                top: '-400px'
            }, 0);

$('.chart').animate({
                left: '-400px',
                top: '-400px'
            }, 0);
$('#first_pic').animate({
                left: '-500px',
                top: '100px'
            }, 0);


new ScrollMagic.Scene({
        triggerElement: '#first_pic_trigger'
    })
    .setTween('#first_pic', .500, {
        x: 500
    })
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: '#first_pic_trigger_out'
    })
    .setTween('#first_pic', .500, {
        x: -500
    })
    .addTo(controller)
    .on("progress", function (e) {
        if (e.progress == 0) {
            $('#chart1').animate({
                left: '-400px',
                top: '-400px'
            }, 500);
            
        }
        if (e.progress == 1) {
            Chart1();
            $('#chart1').animate({
                left: '300px',
                top: '300px'
            }, 500);
        }
    });

new ScrollMagic.Scene({
        triggerElement: "#fadeout-trigger",
        duration: 200
    })
    .addTo(controller)
    .addIndicators() // add indicators (requires plugin)
    .on("update", function (e) {
        //$("#scrollDirection").text(e.target.controller().info("scrollDirection"));
    })
    .on("enter leave", function (e) {
        if (e.type == "enter") {

        }

    })
    .on("start end", function (e) {
        //console.log(e.type);
        /*$("#lastHit").text(e.type == "start" ? "top" : "bottom");
        if (e.type == "end") {
            $(".mapWrap.lazy").animate({
                left: '-500px',
                top: '-500px'
            }, 500);
        }*/
        /* if (e.type == "start") {
                 $(".mapWrap.lazy").animate({
                     left: '-500px',
                     top: '-500px'
                 }, 500);
             }
         else{
             $(".mapWrap.lazy").animate({
                     left: '0px',
                     top: '0px'
                 }, 500);
         }*/
    })
    .on("progress", function (e) {

        // $("#progress").text(e.progress.toFixed(3));
        if (e.progress == 0) {
            $('.chart').animate({
                left: '-400px',
                top: '-400px'
            }, 500);
            $(".mapWrap.lazy").animate({
                left: '0px',
                top: '0px'
            }, 500);
        }
        if (e.progress == 1) {
            Chart2();
            $('.chart').animate({
                left: '1400px',
                top: '1400px'
            }, 500);
            $(".mapWrap.lazy").animate({
                left: '-1000px',
                top: '-1000px'
            }, 500);
        }
    });

/*new ScrollMagic.Scene({
        triggerElement: '#trigger'
    })
    .setTween('#fadein-trigger', .500, {
        x: 0
    })
    .addTo(controller);*/