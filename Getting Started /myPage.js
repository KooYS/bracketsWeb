google.charts.load("current", {packages:['corechart']});

var chart1;
var chart2_1;
var chart2_2;

var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#111111";
    config1.waveTextColor = "#FFFFFF";
    config1.waveColor = "#111111";
    config1.circleThickness = 0.02;
    config1.textVertPosition = 0.4;
    config1.circleFillGap = 0.05;
    config1.waveAnimateTime = 1000;
    config1.waveHeight = 0.1;
    config1.waveCount = 1;
config1.textColor = "#FFFFFF";
    config1.displayPercent = false;
    config1.maxValue = 1000;
    var gauge2= loadLiquidFillGauge("chart2_1", 600, config1);

var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#111111";
    config2.waveTextColor = "#FFFFFF";
    config2.waveColor = "#111111";
    config2.circleThickness = 0.02;
    config2.circleFillGap = 0.05;
config2.textColor = "#FFFFFF";
    config2.textVertPosition = 0.4;
    config2.waveAnimateTime = 1000;
    config2.waveHeight = 0.1;
    config2.waveCount = 1;
    config2.displayPercent = false;
    config2.maxValue = 1000;
    var gauge3= loadLiquidFillGauge("chart2_2", 300, config2);


function Chart1() {
    google.charts.setOnLoadCallback(drawChart);
}


function ClearChart1(){
    chart1.clearChart();
}

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['연도', '어획량'],
        ['2012', 737],
        ['2013', 749],
        ['2014', 842],
        ['2015', 931]
      ]);
        
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" }]);
        
      var options = {
        title: "수산물 어획량",
        width: 600,
        height: 400,
        bar: {groupWidth: '95%'},
        legend: { position: 'none' },
        backgroundColor: 'none',
          animation: {
            duration: 3000,
            easing: 'inAndOut',
            startup: true
        },
      };
      chart1 = new google.visualization.ColumnChart(document.getElementById('chart1'));
      chart1.draw(data, options);
        google.visualization.events.addListener(chart1, 'animationfinish', drawlabel);
         var drawlabel = function() {
            chart1.draw(view, options);
             console.log("fuck");
        }
        drawlabel();
      
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
    
     $('#chart1').css({left:-400,top:-400});
     $('.chart').css({left:-400,top:-400});
     $('#first_pic').css({left:-500,top:200});

        
});


new ScrollMagic.Scene({
        triggerElement: '#first_pic_trigger',  reverse: true
    })
    .addTo(controller)
    .on("progress", function (e) {
    if (e.progress == 0) {
            $('#first_pic').animate({
                left: '-500px'
            }, 500);
        }
        if (e.progress == 1) {
            $('#first_pic').animate({
                left: '0px',
            }, 500);
        }
    });

new ScrollMagic.Scene({
        triggerElement: '#first_pic_trigger_out'
    })
    .addTo(controller)
    .on("progress", function (e) {
        if (e.progress == 0) {
            $('#chart1').animate({
                left: '-400px',
                top: '-400px'
            }, 500);
            $('#first_pic').animate({
                left: '0px',
            }, 500);
            
        }
        if (e.progress == 1) {
            Chart1();
            $('#chart1').animate({
                left: '0px',
                top: '300px'
            }, 500);
            $('#first_pic').animate({
                left: '-500px'
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
            $('.chart').animate({
                left: '1000px',
                top: '1000px'
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