var paused = false;

$('.header a').on('click', function() {
    $('.header a').css('color','black');
    $(this).css('color','#ffcc21');
    var scr = this.innerHTML;
    var path = scr+'.js' 
    remove();
    $.getScript(path, function(data){
        window.p5 && (window.setup || window.draw) && new p5;
    });
});

$('.header i').on('click', function() { 
    if( paused ) {
        loop();
        $('#play').css('color','#ffcc21');
        $('#pause').css('color','black');
        paused = false;
    }
    else {
        noLoop();
        $('#play').css('color','black');
        $('#pause').css('color','#ffcc21');
        paused = true;
    }
});