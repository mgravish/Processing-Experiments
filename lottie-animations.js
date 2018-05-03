var files = [ 
    'lottie/pill-button.json',
    'lottie/radio-button.json',
];

var animArray = new Array();
var container = $('#centered');

for (var i=0; i<files.length; i++) {
    
    var div =`
    <div class="lottie-container" id="lottie-anim-`+i+`">
        <div class="loop"></div>
        <div class="reload"></div>
        <div class="scrub"></div>
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
    anim.scrubbed = false;
    anim.looped = false;
    anim.segs = [0,30];
    var animId = anim.wrapper.id;
    var container = $('#'+animId)[0];
    var svgParent = $(container).children()[3];
    var svgItem = $(svgParent).children()[0];
    var rl = '#'+e;
    var rlbtn = $(rl + ' .reload')[0];
    var scrubBtn = $(rl + ' .scrub')[0];
    var loopBtn = $(rl + ' .loop')[0];
    $(svgItem).css('cursor','pointer');
    
    // Click Behavior
    svgItem.addEventListener('click', function() { 
        anim.playSegments(anim.segs, true);
    }, false);
    
    // Reload Button
    rlbtn.addEventListener('click', function() { anim.goToAndStop(0, true); }, false);
    
    // Scrub Button 
    scrubBtn.addEventListener('click', function() {
        if( !anim.scrubbed ) { 
            $(scrubBtn).addClass('scrub-enabled');
            $(container).mousemove(function() {
                var scrub = (event.pageX - $(container).offset().left)/$(container).width();
                var map = scrub*(anim.segs[1]-anim.segs[0]-1)+scrub;
                anim.goToAndStop(map,true);
            });
        }
        else { 
            $(scrubBtn).removeClass('scrub-enabled');
            $(container).off('mousemove');
        }
        anim.scrubbed = !anim.scrubbed;
    }, false);
    
    // Loop Button 
    loopBtn.addEventListener('click', function() {
        if( !anim.looped ) { 
            $(loopBtn).addClass('loop-enabled');
            anim.loop = true;
        }
        else { 
            $(loopBtn).removeClass('loop-enabled');
            anim.loop = false;
        }
        anim.looped = !anim.looped;
    }, false);
}
