google.charts.load("current", {packages:['corechart']});

var chart1;
var chart2_1;
var chart2_2;

var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FFFFFF";
    config1.waveTextColor = "#419aba";
    config1.waveColor = "#111111";
    config1.circleThickness = 0.02;
    config1.textVertPosition = 0.25;
    config1.circleFillGap = 0.05;
    config1.waveAnimateTime = 1000;
    config1.waveHeight = 0.1;
    config1.waveCount = 1;
config1.textColor = "#419aba";
    //config1.displayPercent = false;
    config1.maxValue = 800;
    var gauge2= loadLiquidFillGauge("chart2_1", 600, config1);

var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#FFFFFF";
    config2.waveTextColor = "#419aba";
    config2.waveColor = "#111111";
    config2.circleThickness = 0.02;
    config2.circleFillGap = 0.05;
config2.textColor = "#419aba";
    config2.textVertPosition = 0.25;
    config2.waveAnimateTime = 1000;
    config2.waveHeight = 0.1;
    config2.waveCount = 1;
    //config2.displayPercent = false;
    config2.maxValue = 800;
    var gauge3= loadLiquidFillGauge("chart2_2", 300, config2);


function Chart1() {
    google.charts.setOnLoadCallback(drawChart);
}
function ClearChart1(){
    chart1.clearChart();
}


function Chart2() {
    google.charts.setOnLoadCallback(drawChart2);
}
function ClearChart2(){
    chart1.clearChart();
}

   function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['연도', '식량작물 생산량'],
        ['2012', 4676],
        ['2013', 4806],
        ['2014', 4802],
        ['2015', 4512]
      ]);
        
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" }]);
        
      var options = {
        title: "김정은 취임 이후 식량작물 생산량",
          titleTextStyle: {
        color: '064156',    // any HTML string color ('red', '#cc00cc')
        //fontName: <string>, // i.e. 'Times New Roman'
        fontSize: 20, // 12, 18 whatever you want (don't specify px)
        bold: true,    // true or false
        //italic: <boolean>   // true of false
    },
        width: 600,
        height: 400,
        colors: ['064156'],
        bar: {groupWidth: '95%'},
        legend: { position: 'none' },
          vAxis: {
            viewWindowMode:'explicit',
            viewWindow: {
              max:5000,
              min:4000
            },
          },
        backgroundColor: 'none',
          animation: {
            duration: 2000,
            easing: 'out',
            startup: true
        },
      };
      chart1 = new google.visualization.ColumnChart(document.getElementById('chart1'));
      chart1.draw(data, options);
        google.visualization.events.addListener(chart1, 'animationfinish', drawlabel);
         var drawlabel = function() {
            chart1.draw(view, options);
        }
        drawlabel();
      
  }

function drawChart2() {
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
        title: "김정은 취임 이후 어획량의 변화",
          titleTextStyle: {
        color: '419bba',    // any HTML string color ('red', '#cc00cc')
        //fontName: <string>, // i.e. 'Times New Roman'
        fontSize: 20, // 12, 18 whatever you want (don't specify px)
        bold: true,    // true or false
        //italic: <boolean>   // true of false
    },
        width: 600,
        height: 400,
        bar: {groupWidth: '95%', color: 'black'},
        legend: { position: 'none' },
        colors: ['419bba'],
        backgroundColor: 'none',
          vAxis: {
            viewWindowMode:'explicit',
            viewWindow: {
              max:1000,
              min:400
            },
          },
          animation: {
            duration: 2500,
            easing: 'out',
            startup: true
        },
      };
      chart1 = new google.visualization.ColumnChart(document.getElementById('chart2'));
      chart1.draw(data, options);
        google.visualization.events.addListener(chart1, 'animationfinish', drawlabel);
         var drawlabel = function() {
            chart1.draw(view, options);
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
    
     $('#chart1').css({left:-800,top:0});
     $('#chart2').css({left:-800,top:0});
     $('.chart').css({left:-800,top:0});
     $('.chart').css('display','none');
    
    $('#chart1').css('display','none');
   $('#chart2').css('display','none');
    
     $('#first_pic').css({left:-800,top:0});
     $('#second_pic').css({left:-800,top:0});
     $('#third_pic').css({left:-800,top:0});
   $('#first_pic').css('display','none');
   $('#second_pic').css('display','none');
   $('#third_pic').css('display','none');
});


new ScrollMagic.Scene({
        triggerElement: '#first_pic_trigger'
    })
    .addTo(controller)
    .on("progress", function (e) {
    if (e.progress == 0) {
             $('#first_pic').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('#first_pic').css('display','none');
            });
        
        }
        if (e.progress == 1) {
            $('#first_pic').css('display','block');
            $('#first_pic').css('position','relative').animate({
                left: '0',
            },
                500);
        }
    });

new ScrollMagic.Scene({
        triggerElement: '#second_pic_trigger'
    })
    .addTo(controller)
    .on("progress", function (e) {
    if (e.progress == 0) {
            
        $('#second_pic').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('#second_pic').css('display','none');
            });
        
        
        }
        if (e.progress == 1) {
        
            $('#second_pic').css('display','block');
            $('#second_pic').css('position','relative').animate({
                left: '0',
            },
                500);
        }
    });

new ScrollMagic.Scene({
        triggerElement: '#charts_trigger'
    })
    .addTo(controller)
    .on("progress", function (e) {
        if (e.progress == 0) {
           
             $('#chart1').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('#chart1').css('display','none');
            });
            $('#chart2').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('#chart2').css('display','none');
                 $('#first_pic').css('display','block');
            $('#first_pic').css('position','relative').animate({
                left: '0',
            },
                500);
             $('#second_pic').css('display','block');
            $('#second_pic').css('position','relative').animate({
                left: '0',
            },
                500);
            });    
        }
        if (e.progress == 1) {
           
             $('#first_pic').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('#first_pic').css('display','none');
            });
            
             $('#second_pic').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('#second_pic').css('display','none');
                  
                 Chart1(); 
                 Chart2(); 
           
            $('#chart1').css('display','block');
            $('#chart1').css('position','relative').animate({
                left: '0',
            },
                500);
            $('#chart2').css('display','block');
            $('#chart2').css('position','relative').animate({
                left: '0',
            },
                500);
            });
        }
    });

new ScrollMagic.Scene({
        triggerElement: "#un_charts_trigger"
    })
    .addTo(controller)
    .addIndicators() // add indicators (requires plugin)
    .on("progress", function (e) {

        // $("#progress").text(e.progress.toFixed(3));
        if (e.progress == 0) {
             $('.chart').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('.chart').css('display','none');
                  
                 Chart1(); 
                 Chart2(); 
           
            $('#chart1').css('display','block');
            $('#chart1').css('position','relative').animate({
                left: '0',
            },
                500);
            $('#chart2').css('display','block');
            $('#chart2').css('position','relative').animate({
                left: '0',
            },
                500);
            });
        
        }
        if (e.progress == 1) {
            
            $('#chart1').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('#chart1').css('display','none');
            });
            $('#chart2').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                    $('#chart2').css('display','none');
                    $('.chart').css('display','block');
                    $('.chart').css('position','relative').animate({
                        left: '0',
                    },
                        500);
            });  
            
        }
    });
new ScrollMagic.Scene({
        triggerElement: "#third_pic_trigger"
    })
    .addTo(controller)
    .addIndicators() // add indicators (requires plugin)
    .on("progress", function (e) {

        // $("#progress").text(e.progress.toFixed(3));
        if (e.progress == 0) {
             $('#third_pic').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('#third_pic').css('display','none');
                 $('.chart').css('display','block');
                    $('.chart').css('position','relative').animate({
                        left: '0',
                    },
                        500);
            });
        
        }
        if (e.progress == 1) {
            
            $('.chart').css('position','relative').animate({
                left: '-800',
                 
             },500, function(){
                $('.chart').css('display','none');
                $('#third_pic').css('display','block');
                $('#third_pic').css('position','relative').animate({
                    left: '0',
                },
                    500);
                
                
            });
            
        }
    });

/*new ScrollMagic.Scene({
        triggerElement: '#trigger'
    })
    .setTween('#fadein-trigger', .500, {
        x: 0
    })
    .addTo(controller);*/