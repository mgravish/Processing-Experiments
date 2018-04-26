var r, g, b, rad, i, displayText, speed, empty, cnv;
var limegreen = '#14ffc8';
var darkpurple = '#5d3b66';
var mustard = '#ffcc21';
var palette = [limegreen, darkpurple, mustard];

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.style('position','absolute');
    cnv.style('top','0');
    cnv.style('height','100vh');
    cnv.style('z-index','1');
    background(255, 255, 255);
    speed = 1;
    i = [];
    empty=false;
    cnv.mousePressed(click);
    click();
}

function draw() {
    noStroke();
    smooth();
    if (!empty) {
        for (var j=0; j<i.length; j++) {
            if (i[j].onscreen(j)) {
                i[j].step();
                i[j].move();
                i[j].render(j);
            } else {
                i.splice(j,1);
                j--;
                console.log("Killed! Array length is now: "+i.length);
            } 
            if (i.length==0) {
                empty=true;
            }
        }
    } else {
        empty=true;
        noLoop();
        console.log("noLoop()");
    }
}

function click() {
    console.log(i.length);
    for (var j=0;j<25;j++) {
        i[j] = new Particle(random(200,windowWidth-200),random(200,windowHeight-200),i.length);
    }
}

function Particle(x,y,index) {
    this.rad = 7;
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.col = random(palette);
    this.angle = radians(Math.round((Math.random()*7))*45);
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
        if (random(0,1000)<5) {
            this.angle += leftOrRight();
        }

        this.dir.x = cos(this.angle);
        this.dir.y = sin(this.angle);
        this.vel = this.dir.copy();
        this.vel.mult(this.speed);
        this.pos.add(this.vel);
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
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
    }
}

function leftOrRight() {

    var val = Math.round(random(0,1));

    if (val>0) {
        return radians(45);
    } else {
        return radians(-45);
    }
}