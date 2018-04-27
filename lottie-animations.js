console.log('Loaded lottie-animations.js');

var animationData = 'lottie/button--disabled.json';

var params = {
        container: document.getElementById('centered'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: animationData,
};

var anim;
var element;

anim = lottie.loadAnimation(params);
anim.addEventListener('DOMLoaded',startAnimation);

console.log( $('g').length );


function startAnimation(){
    console.log ('loaded!');
    var container = document.getElementById('button--disabled');
    container.onclick = clicked;
}

function clicked(){
    anim.goToAndPlay(0);
}