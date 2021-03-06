var position, rad, b, e, curX, curY, cont, eitherOr, cnv;
var limegreen = '#14ffc8';
var darkpurple = '#5d3b66';
var mustard = '#ffcc21';
var palette = [limegreen, darkpurple, mustard];

var i = new Array();
eitherOr = [-1, 1];
rad = 15;
b = 0;

function setup() {
    pixelDensity(2.0);
    smooth();
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.style('position','absolute');
    cnv.style('top','0');
    cnv.style('height','100vh');
    cnv.style('z-index','1');
    background(200, 255, 255);
    cont = true;
    cnv.mousePressed(click);
    click();
}

function draw() {
    background(255, 255, 255);
    for(var j = 0; j < i.length; j++){
        i[j].step();
        i[j].render();
    }
    //console.log("drawing");
}

function click() {
    cont=true;
    i=new Array();
    resizeCanvas(windowWidth, windowHeight);
    i[i.length] = new Curve(25, 25, rad, rad, b, PI, OPEN);
    while(cont){
        curX = i[i.length-1].pos.x+75;
        curY = i[i.length-1].pos.y;

        if(curX > windowWidth) {
            curX = 25;
            curY += 75;
        }
        
        if(curY > windowHeight){
            cont=false;
            console.log("noLoop()");
        }
        
        if(i.length%2===0) {
            b=0;
            e=PI;
        }
        
        else {
            b=PI;
            e=TWO_PI;
        }
        
        i.push(new Curve(curX, curY, rad, rad, b, e, OPEN));
    }
}

function windowResized() {
  mousePressed();
}

function Curve(x,y,w,h,start,stop,mode) {
    this.rad = 10;
    this.angle = 0;
    this.mult = random(eitherOr);
    this.pos = createVector(x, y);
    this.col = random(palette);
    
    this.step = function(){
        this.angle += .05*this.mult;
    }
    
    this.render = function(j) {
        stroke(this.col);
        w = maxVal(((mouseX+200)/(windowWidth*2)), ((mouseY+200)/(windowHeight*2)))
        strokeWeight(20*w);
        h = 50*w;
        noFill();
        arc(x,y,h,h,start+this.angle,stop+this.angle,mode);
    }
}

function maxVal(a,b) {
    if(a>b) {
        return a;
    }
    else {
        return b;
    }
}
