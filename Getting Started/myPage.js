function titleActive() {
    $(".scont_section").removeClass("active"), $(".scont_section").eq(subPageNum).addClass("active"), $(".info_tooltip").removeClass("active"), $(".info_tooltip").filter(".act_" + subPageNum).addClass("active")
}

function resizefunc() {
    scrollTop = $(window).scrollTop();
    var e = $(".intro.v2").offset().top - 100,
        t = 0;
    is_mobile && (t = 36), scrollTop >= $(".main").height() + $(".intro").height() - t && scrollTopi - o && scrollTop nav li ").off().on("
    click ",navClickEvent),e(".info_tooltip ").off().on("
    click ",tooltipClickEvent),controller=new ScrollMagic.Controller,e(".line1.section ").each(function(t,i){var o=e(this);o.index();new ScrollMagic.Scene({triggerElement:this,offset:-100,reverse:!0,duration:o.height()}).addTo(controller).on("
    enter leave progress ",function(e){"
    progress "==e.type&&(o.addClass("
    active "),prevNum=pageNum,pageNum=o.index()+1,pageSet())})}),is_mobile||e(".scont_section ").each(function(t,i){var o=e(this);o.index();new ScrollMagic.Scene({triggerElement:this,offset:-0,reverse:!0,duration:o.height()}).addTo(controller).on("
    enter leave progress ",function(e){"
    progress "==e.type&&(subPageNum=t,titleActive())})}),e(".intro.text_wrap p ").each(function(t,i){var o=e(this);new ScrollMagic.Scene({triggerElement:this,offset:-200,reverse:!0,duration:o.height()}).addTo(controller).on("
    enter leave progress ",function(e){"
    progress "==e.type&&o.addClass("
    active ")})}),TweenMax.set(".st2 ",{drawSVG:"
    0 "}),totalPageNum=e(".textArea.section ").length});var mapPosArr=new Array([349,900],[-635,-671],[225,481],[452,950],[-745,-412],[-420,1046]);window.attachEvent?window.attachEvent("
    onresize ",function(){resizefunc()}):window.addEventListener("
    resize ",function(){resizefunc()}),$(window).bind("
    scroll ",function(e){scrollActFunc()}),!function(e,t,i,o){var n=e(t);e.fn.lazyload=function(a){function r(){var t=0;s.each(function(){var i=e(this);if(!c.skip_invisible||i.is(": visible "))if(e.abovethetop(this,c)||e.leftofbegin(this,c));else if(e.belowthefold(this,c)||e.rightoffold(this,c)){if(++t>c.failure_limit)return!1}else i.trigger("
    appear "),t=0})}var l,s=this,c={threshold:0,failure_limit:0,event:"
    scroll ",effect:"
    show ",container:t,data_attribute:"
    original ",skip_invisible:!0,appear:null,load:null,placeholder:"
    data: image / png;
    base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8 + PB / AAffA0nNPuCLAAAAAElFTkSuQmCC "};return a&&(o!==a.failurelimit&&(a.failure_limit=a.failurelimit,delete a.failurelimit),o!==a.effectspeed&&(a.effect_speed=a.effectspeed,delete a.effectspeed),e.extend(c,a)),l=c.container===o||c.container===t?n:e(c.container),0===c.event.indexOf("
    scroll ")&&l.bind(c.event,function(){return r()}),this.each(function(){var t=this,i=e(t);t.loaded=!1,(i.attr("
    src ")===o||i.attr("
    src ")===!1)&&i.is("
    img ")&&i.attr("
    src ",c.placeholder),i.one("
    appear ",function(){if(!this.loaded){if(c.appear){var o=s.length;c.appear.call(t,o,c)}e("
    ").bind("
    load ",function(){var o=i.attr("
    data - "+c.data_attribute);i.hide(),i.is("
    img ")?i.attr("
    src ",o):i.css("
    background - image ","
    url('"+o+"')
    "),i[c.effect](c.effect_speed),t.loaded=!0;var n=e.grep(s,function(e){return!e.loaded});if(s=e(n),c.load){var a=s.length;c.load.call(t,a,c)}}).attr("
    src ",i.attr("
    data - "+c.data_attribute))}}),0!==c.event.indexOf("
    scroll ")&&i.bind(c.event,function(){t.loaded||i.trigger("
    appear ")})}),n.bind("
    resize ",function(){r()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&n.bind("
    pageshow ",function(t){t.originalEvent&&t.originalEvent.persisted&&s.each(function(){e(this).trigger("
    appear ")})}),e(i).ready(function(){r()}),this},e.belowthefold=function(i,a){var r;return r=a.container===o||a.container===t?(t.innerHeight?t.innerHeight:n.height())+n.scrollTop():e(a.container).offset().top+e(a.container).height(),r<=e(i).offset().top-a.threshold},e.rightoffold=function(i,a){var r;return r=a.container===o||a.container===t?n.width()+n.scrollLeft():e(a.container).offset().left+e(a.container).width(),r<=e(i).offset().left-a.threshold},e.abovethetop=function(i,a){var r;return r=a.container===o||a.container===t?n.scrollTop():e(a.container).offset().top,r>=e(i).offset().top+a.threshold+e(i).height()},e.leftofbegin=function(i,a){var r;return r=a.container===o||a.container===t?n.scrollLeft():e(a.container).offset().left,r>=e(i).offset().left+a.threshold+e(i).width()},e.inviewport=function(t,i){return!(e.rightoffold(t,i)||e.leftofbegin(t,i)||e.belowthefold(t,i)||e.abovethetop(t,i))},e.extend(e.expr[": "],{"
    below - the - fold ":function(t){return e.belowthefold(t,{threshold:0})},"
    above - the - top ":function(t){return!e.belowthefold(t,{threshold:0})},"
    right - of -screen ":function(t){return e.rightoffold(t,{threshold:0})},"
    left - of -screen ":function(t){return!e.rightoffold(t,{threshold:0})}," in -viewport ":function(t){return e.inviewport(t,{threshold:0})},"
    above - the - fold ":function(t){return!e.belowthefold(t,{threshold:0})},"
    right - of -fold ":function(t){return e.rightoffold(t,{threshold:0})},"
    left - of -fold ":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);