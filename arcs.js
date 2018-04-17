var r, g, b, rad, i, displayText, speed, palette, limegreen, darkpurple, mustard;

limegreen = '#14ffc8';
darkpurple = '#5d3b66';
mustard = '#ffcc21';
palette = [limegreen, darkpurple, mustard];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
    i = new Curve(500,500,50,50,0, PI, OPEN);
}

function draw() {
    strokeWeight(0);
    i.render();
}

function mousePressed() {
    var j = new Curve(i.pos.x+i.w,500,50,50,0,PI,OPEN);
}

function Curve(x,y,w,h,start,stop,mode) {
    this.rad = 10;
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.angle = radians(-90);
    this.col = random(palette); 
    this.speed = speed;
    this.age = 1;
    this.w=w;
    
    var wMax, wMin, hMax, hMin;
    wMax = windowWidth;
    wMin = -this.rad;
    hMax = windowHeight;
    hMin = -this.rad;
    /*
    this.step = function() {
        this.age += 1;
    }
    
    this.move = function() {
		this.dir.x = cos(this.angle);
		this.dir.y = sin(this.angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
        this.pos.add(2*sin(this.age/30),0);
    }
        
    this.offscreen = function() {
        if ( this.pos.y > hMax || this.pos.y < hMin || this.pos.x > wMax || this.pos.x < wMin ) {
            console.log("OFF");
            return true;
        } 
        else {
            return false;
        }
    }
    */
    this.render = function(j) {
        stroke(this.col);
        strokeWeight(5);
        arc(x,y,w,h,start,stop,mode);
    }
}