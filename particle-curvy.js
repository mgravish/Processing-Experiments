var r, g, b, rad, i, displayText, speed, palette, limegreen, darkpurple, mustard;

limegreen = '#14ffc8';
darkpurple = '#5d3b66';
mustard = '#ffcc21';
palette = [limegreen, darkpurple, mustard];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
    speed = 2;
    i = new Particle(windowWidth/2,800);
}

function draw() {
    strokeWeight(0);
    i.step();
    i.move();
    i.render();
    if(i.offscreen()) {
        noLoop();
    }
}

function mousePressed() {

}

function Particle(x,y) {
    this.rad = 10;
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.angle = radians(-90);
    this.col = random(palette); 
    this.speed = speed;
    this.age = 1;
    
    var wMax, wMin, hMax, hMin;
    wMax = windowWidth;
    wMin = -this.rad;
    hMax = windowHeight;
    hMin = -this.rad;
    
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
    
    this.render = function(j) {
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
    }
}