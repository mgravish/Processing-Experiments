var r, g, b, rad;

function setup() {
    createCanvas(windowWidth, windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);
    rad = 25;
}

function draw() {
    background(255, 255, 255);
    fill(r, g, b, 255);
    strokeWeight(0);
    ellipse(mouseX, mouseY, rad, rad);
}

function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
}