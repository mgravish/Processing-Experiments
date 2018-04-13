var r, g, b, rad, i, displayText, speed;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    rad = 25;
    speed = 2;
    i = [];
}

function draw() {
    background(255, 255, 255);
    strokeWeight(0);
    
    if(i.length>0) {
        for(var j=0; j<i.length; j++) {
            if(i[j].onscreen(j)) {
                i[j].step();
                i[j].move();
                i[j].render(j);
            } 
            else {
                i.splice(j,1);
                j--;
            }
        }
    }
}

function mouseDragged() {
    console.log(i.length);
    i[i.length] = new Particle(mouseX,mouseY,i.length);
}

function Particle(x,y,index) {
    this.rad = random(2,100);
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.angle = random(0,360);
    this.speed = speed;
    this.age = 1;
    this.vel = createVector(0, 0);
    var wMax, wMin, hMax, hMin;
    
    wMax = windowWidth;
    wMin = -this.rad;
    hMax = windowHeight;
    hMin = -this.rad;
    
    r = random(255);
    g = random(255);
    b = random(255);
    
    this.fill = createVector(r, g, b);
    this.fill.r = r;
    this.fill.g = g;
    this.fill.b = b;
    
    this.move = function() {
		this.dir.x = cos(this.angle);
		this.dir.y = sin(this.angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
    }
    
    this.step = function() {
        this.age += 1;
        //this.speed += .1;
    }
    
    this.onscreen = function(index) {
        if ( this.pos.y > hMax || this.pos.y< hMin || this.pos.x > wMax || this.pos.x< wMin ) {
            return false;
        } 
        else {
            return true;
        }
    }
    
    this.render = function(j) {
        fill(this.fill.r, this.fill.g, this.fill.b);
        ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
    }
}