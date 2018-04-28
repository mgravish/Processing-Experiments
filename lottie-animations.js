var files = [ 
    'lottie/pill-button.json',
    'lottie/radio-button.json'
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
    var elem = $('#'+anim.fileName)[0];
    var parent = $(elem).parent()[0];
    var svgParent = $(parent).parent()[0];
    var container = $(svgParent).parent()[0];
    var rl = '#'+e;
    var rlbtn = $(rl + ' .reload')[0];
    var togglebtn = $(rl + ' .toggle')[0];
    
    parent.addEventListener('click', function() { 
        if(!anim.toggled){ anim.segs = [0,30]; }
        else { anim.segs = [35,60]; }
        anim.playSegments(anim.segs, true);
    }, false);
    
    rlbtn.addEventListener('click', function() { anim.goToAndStop(0, true); }, false);
    
    togglebtn.addEventListener('click', function() {
        if( !anim.toggled ) { 
            $(togglebtn).addClass('toggle-enabled');
        }
        else { 
            $(togglebtn).removeClass('toggle-enabled'); 
        }
        anim.toggled = !anim.toggled;
        console.log('Toggling status: '+anim.toggled);
    }, false);
    
    $(parent).css('cursor','pointer');
    console.log(container);
    $(container).mouseover(function(){
        console.log('hovering');
    });
}

function reload() {
    console.log ('reload');
}
