var $slider1 = $("#slider1");
var $slider2 = $("#slider2");
var $prev = $(".prev");
var $next = $(".next");
var speed = 500;
// DOM요소가 들어갈 때는 $가 붙는다

init($slider1, 1000);
init($slider2, 500);

$prev.on("click", function(e){
    e.preventDefault();
    prev($slider1);
    prev($slider2);
});

$next.on("click", function(e){
    e.preventDefault();
    next($slider1);
    next($slider2);
});


// init(), next(), prev()

function init(el){
    var len = $slider1.find("li").length;
    var test= el.children("ul");
    console.log(test)
    
    el.children("ul").css({
        width: 100 * len + "%"
    });

    el.children("ul").find("li").css({
        width: 100 / len + "%"
    });

    el.children("ul").find("li").last().prependTo(el.children("ul"));
}

function next(el, speed){
    el.children("ul").animate({
        marginLeft: "-200%"
    }, speed, function(){
        $(this).css({marginLeft:"-100%"});
        $(this).find("li").first().appendTo(el.children("ul"));
        console.log($(this));
    });
}

function prev(el, speed){
    el.children("ul").animate({
        marginLeft: "0%"
    }, speed, function(){
        $(this).css({marginLeft: "-100%"});
        $(this).children("li").last().prependTo(el. children("ul"));
    });
}
