var paused = false;
var limegreen = '#14ffc8';
var mustard = '#ffcc21';
var headerPalette = [limegreen, mustard];

$('.header a').on('click', function() {
    $('.header a').css('color','black');
    $(this).css('color',pickRandom(headerPalette));
    var scr = this.id;
    var path = scr+'.js' 
    remove();
    $.getScript(path, function(data){
        window.p5 && (window.setup || window.draw) && new p5;
    });
});

$('.header i').on('click', function() { 
    if( paused ) {
        loop();
        $('#play').css('color', pickRandom(headerPalette));
        $('#pause').css('color','black');
        paused = false;
    }
    else {
        noLoop();
        $('#play').css('color','black');
        $('#pause').css('color', pickRandom(headerPalette));
        paused = true;
    }
});

$('.footer').on('click', function() {
   $(this).fadeOut( "slow", function() {}); 
});

function pickRandom (myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}