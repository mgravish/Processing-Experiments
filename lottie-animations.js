console.log('Loaded lottie-animations.js');

var anim1 = 'lottie/button--disabled.json';

var params = {
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: null,
};

var anim;
var animArray = new Array();
var element = '<div id="anim1"></div>';
var elem;

for(var i = 0; i < 1; i++) {
    //elem = $('#centered')append(element);
    params.path = anim1;
    params.name = 'mybutton';
    //params.container: elem;
    params.container.on('click', clicked);
    anim = lottie.loadAnimation(params);
    animArray.push(anim);
}



function startAnimation(){
    console.log ('loaded!');
    var container = document.getElementById('button--disabled');
    container.onclick = clicked;
}

function clicked(e){
    console.log(this);
    mybutton.goToAndPlay(0);
}