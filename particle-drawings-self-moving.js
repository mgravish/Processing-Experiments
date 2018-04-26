var r, g, b, rad, i, displayText, speed, noiseScale;

noiseScale = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    speed = 2;
    i = [];
}

function draw() {
    background(255, 255, 255);
    strokeWeight(0);
    if(i.length>0) {
        if(i.length==25){i[i.length] = new Particle(random(200,windowWidth-200),random(200,windowHeight-200),i.length);}
        for(var j=0; j<i.length; j++) {
            if(i[j].onscreen(j)) {
                i[j].step();
                i[j].move();
                i[j].render(j);
            } 
            else {
                i.splice(j,1);
                j--;
                console.log("Killed! Array length is now: "+i.length);
            }
        }
    }
    else {
        noLoop();
        console.log("noLoop()");
    }
}

function mouseDragged() {
    console.log(i.length);
    loop();
    console.log("loop()");
    i[i.length] = new Particle(mouseX,mouseY,i.length);
}

function Particle(x,y,index) {
    this.rad = 0;
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.angle = radians(90);
    this.speed = speed;
    this.age = 1;
    
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
    
    this.step = function() {
        this.age += 1;
        if (this.rad<25) this.rad=this.age/4;
        else this.rad = 25;
    }
    
    this.move = function() {
        if(this.age%100==0){
            this.angle += leftOrRight();
            this.speed += .1;
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
        fill(this.fill.r, this.fill.g, this.fill.b);
        ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
    }
}

function leftOrRight(){
    var val=Math.round(random(0,1));
    if(val>0) return radians(90);
    else return radians(-90);
}