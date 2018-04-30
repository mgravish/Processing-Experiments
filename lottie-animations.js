var files = [ 
    'lottie/pill-button.json',
    'lottie/radio-button.json',
    'lottie/car-loop.json'
];

var animArray = new Array();
var container = $('#centered');

for (var i=0; i<files.length; i++) {
    
    var div =`
    <div class="lottie-container" id="lottie-anim-`+i+`">
        <div class="reload"></div>
        <div class="toggle"></div>
    </div>`;
    container.append(div);
    var elem = $('.lottie-container')[i];
    
    params = {
        path: files[i],
        container: elem,
        renderer: 'svg',
        loop: false,
        autoplay: false
    }
    
    var anim = lottie.loadAnimation(params);
    anim.goToAndStop(0,true);
    waitForDOMLoaded(elem.id, anim);
    animArray[i] = anim;    
}


function waitForDOMLoaded(e, anim) {
    anim.addEventListener('DOMLoaded', function() {
        prepAnimElement(e, anim);
    });
}
                          
function prepAnimElement(e, anim) {
    addListeners(e, anim);
}

function addListeners (e, anim) {
    var fn = anim.fileName;
    anim.toggled = false;
    anim.segs = [0,30];
    var animId = anim.wrapper.id;
    var container = $('#'+animId)[0];
    var svgParent = $(container).children()[2];
    var svgItem = $(svgParent).children()[0];
    var rl = '#'+e;
    var rlbtn = $(rl + ' .reload')[0];
    var togglebtn = $(rl + ' .toggle')[0];
    
    // Click Behavior
    svgItem.addEventListener('click', function() { 
        anim.playSegments(anim.segs, true);
    }, false);
    
    // Reload Button
    rlbtn.addEventListener('click', function() { anim.goToAndStop(0, true); }, false);
    
    // Toggle Button 
    togglebtn.addEventListener('click', function() {
        if( !anim.toggled ) { 
            $(togglebtn).addClass('toggle-enabled');
            $(container).mousemove(function() {
                var scrub = (event.pageX - $(container).offset().left)/$(container).width();
                var map = scrub*(anim.segs[1]-anim.segs[0]-1)+scrub;
                anim.goToAndStop(map,true);
            });
            //anim.segs = [35,60];
            //anim.goToAndStop(anim.segs[0], true);
        }
        else { 
            $(togglebtn).removeClass('toggle-enabled');
            $(container).off('mousemove');
            //anim.segs = [0,30];
            //anim.goToAndStop(anim.segs[0], true);
        }
        anim.toggled = !anim.toggled;
        console.log('Toggling status: '+anim.toggled);
    }, false);
    
    // Scrub Behavior
    /*
    $(container).mousemove(function() {
        var scrub = (event.pageX - $(container).offset().left)/$(container).width();
        var map = scrub*(anim.segs[1]-anim.segs[0]-1)+scrub;
        anim.goToAndStop(map,true);
    });
    */
    
    $(parent).css('cursor','pointer');
    console.log(container);
}

function reload() {
    console.log ('reload');
}
