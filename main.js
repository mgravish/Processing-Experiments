var paused = false;
var lottieActive = false;
var limegreen = '#14ffc8';
var mustard = '#ffcc21';
var headerPalette = [limegreen, mustard];

$('.header a').on('click', function() {
    
    $('.header a').css('color','black');
    $(this).css('color',pickRandom(headerPalette));
    
    if( $('canvas').length ) { removeP5js(); }
    
    if( this.id === 'lottie') { handleLottie(); }
    else {
        if ( lottieActive ) { removeLottie(); }
        var scr = this.id;
        var path = scr+'.js' 
        $.getScript(path, function(data){
            window.p5 && (window.setup || window.draw) && new p5;
        });
    }
    
    playAnim();
    
});

$('.header i').on('click', function() { 
    if( this.id === 'play' ) {
        console.log ('Play clicked');
        playAnim();
    }
    else {
        console.log ('Pause clicked');
        pauseAnim();
    }
});

$('.footer').on('click', function() {
   $(this).fadeOut( "slow", function() {}); 
});

function handleLottie() {
    if ( lottieActive ) { removeLottie(); }  
    else { addLottie(); }
    
}

function pickRandom (myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function removeLottie() {
    console.log('Removing Lottie');
    $('#centered').contents().remove();
    anim.destroy();
    lottieActive = false;
}

function addLottie() {
   console.log('Adding Lottie');
    lottieActive = true;
    var path = 'lottie-animations.js';
    $.getScript(path, function(data){});
}

function pauseAnim() { 
    if ( lottieActive ) { lottie.stop(); }
    else { noLoop(); }
    $('#play').css('color','black');
    $('#pause').css('color', pickRandom(headerPalette));
    paused = true;
}

function playAnim() { 
    $('#play').css('color', pickRandom(headerPalette));
    $('#pause').css('color','black');
    if ( lottieActive ) { lottie.play(); }
    else { if( $('canvas').length ){ loop(); }}
    paused = false;
}

function removeP5js() {
    remove();
}