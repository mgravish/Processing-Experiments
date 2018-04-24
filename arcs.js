var palette, limegreen, darkpurple, mustard, position, rad, b, e, curX, curY, cont, eitherOr;
var i = new Array();
eitherOr = [-1, 1];

limegreen = '#14ffc8'; darkpurple = '#5d3b66'; mustard = '#ffcc21';

palette = [
    limegreen,
    darkpurple,
    mustard];

rad = 10;
b = 0;


function setup() {
    pixelDensity(2.0);
    smooth();
    createCanvas(windowWidth, windowHeight);
    background(200, 255, 255);
    cont = true;
    mousePressed();
}

function draw() {
    background(255, 255, 255);
    for(var j = 0; j < i.length; j++){
        i[j].step();
        i[j].render();
    }
    //console.log("drawing");
}

function mousePressed() {
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
        strokeWeight(((mouseX+100)/(windowWidth*2))*10);
        noFill();
        arc(x,y,w,h,start+this.angle,stop+this.angle,mode);
    }
}
