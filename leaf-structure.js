var r, g, b, rad, i, displayText, speed, empty, palette;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
    speed = 2;
    i = [];
    var limegreen = '#14ffc8';
    var darkpurple = '#5d3b66';
    var mustard = '#ffcc21';
    palette = [limegreen, darkpurple, mustard];
    empty=false;
    //mousePressed();
    i[i.length] = new Particle(windowWidth/2,windowHeight-200,i.length,-90);
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

function mousePressed() {
    console.log(i.length);
    var ran = random(i);
    i[i.length] = new Particle(ran.pos.x, ran.pos.y, i.length, degrees(ran.angle)+leftOrRight());
}

function Particle(x, y, index, angle) {
    this.rad = 7;
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.col = random(palette);
    this.angle = radians(angle);
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
        /*
        if (random(0,1000)<5) {
            this.angle += leftOrRight();
        }*/
       
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
        return -135;
    } else {
        return -45;
    }
}