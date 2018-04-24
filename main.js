$('.header a').on('click', function() { 
    var scr = this.innerHTML;
    var path = scr+'.js' 
    remove();
    $.getScript(path, function(data){
        window.p5 && (window.setup || window.draw) && new p5;
    });
    
    // works but with a 1-click delay: document.body.appendChild(document.createElement('script')).src='subway.js';
    //new p5();
    //setup();
});