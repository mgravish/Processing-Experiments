console.log('lottie-animations.js');

var animationData = 'lottie/button--disabled.json';

var params = {
        container: document.getElementById('centered'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationData
    };

    var anim;
    anim = lottie.loadAnimation(params);