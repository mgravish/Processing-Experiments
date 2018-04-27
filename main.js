var paused = false;
var lottie = false;
var limegreen = '#14ffc8';
var mustard = '#ffcc21';
var headerPalette = [limegreen, mustard];

$('.header a').on('click', function() {
    $('.header a').css('color','black');
    $(this).css('color',pickRandom(headerPalette));
    
    if( $('canvas').length ) { remove(); }
    if( this.id === 'lottie') { handleLottie(); }
    else {
        var scr = this.id;
        var path = scr+'.js' 
        $.getScript(path, function(data){
            window.p5 && (window.setup || window.draw) && new p5;
        });
    }
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

function handleLottie() {
    console.log('handleLottie');
    //if ( $('#centered').children().length ) { } anim.destroy(); 
    //else {  }
    var path = 'lottie-animations.js';
    $.getScript(path, function(data){});
}

function pickRandom (myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}