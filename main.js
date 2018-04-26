<<<<<<< HEAD
var paused = false;

$('.header a').on('click', function() {
    $('.header a').css('color','black');
    $(this).css('color','#ffcc21');
=======
$('.header a').on('click', function() { 
>>>>>>> df3335125405f820dbc2c86542875a8bc3453612
    var scr = this.innerHTML;
    var path = scr+'.js' 
    remove();
    $.getScript(path, function(data){
        window.p5 && (window.setup || window.draw) && new p5;
    });
<<<<<<< HEAD
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
=======
    
    // works but with a 1-click delay: document.body.appendChild(document.createElement('script')).src='subway.js';
    //new p5();
    //setup();
>>>>>>> df3335125405f820dbc2c86542875a8bc3453612
});