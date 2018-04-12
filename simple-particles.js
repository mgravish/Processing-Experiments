var r, g, b, rad, i;

function setup() {
    createCanvas(windowWidth, windowHeight);
   
    rad = 25;
    i = [];
}

function draw() {
    background(255, 255, 255);
    strokeWeight(0);
    
    if(i.length>0) {
        for(var j=0; j<i.length; j++) {
            i[j].move();
            i[j].advance();
            if(!i[j].checkEdge(j)){
                i[j].render();
            }
        }
    }
}

function mouseDragged() {
    console.log(i.length);
    i[i.length] = new Particle(mouseX,mouseY);
}

function Particle(x,y) {
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.speed = 4;
    this.age = 1;
    
    r = random(255);
    g = random(255);
    b = random(255);
    
    this.fill = createVector(r, g, b);
    this.fill.r = r;
    this.fill.g = g;
    this.fill.b = b;
    
    this.move = function() {
        this.pos.y += this.speed;
    }
    
    this.advance = function() {
        this.age += 1;
        this.speed += .1;
    }
    
    this.checkEdge = function(index){
        if (this.pos.y>windowHeight+rad) {
            i.splice(index,1);
            console.log("killed");
            return true;
        }
    }
    
    this.render = function(r) {
        fill(this.fill.r+2*this.age, this.fill.g+2*this.age, this.fill.b+2*this.age);
        ellipse(this.pos.x, this.pos.y, rad, rad);
    }
}