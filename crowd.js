var cnv, img, glitch, glitchArray;
var limegreen = '#14ffc8';
var darkpurple = '#5d3b66';
var mustard = '#ffcc21';
var palette = [limegreen, darkpurple, mustard];

function setup() {
    pixelDensity(2.0);
    smooth();
    //noCursor();
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.style('position','absolute');
    cnv.style('top','0');
    cnv.style('z-index','1');
    glitchArray = new Group();
    cnv.mousePressed(click);
    click();
}

function draw() {
    background(255, 255, 255);
    for(var i=0; i<allSprites.length; i++)
    {
        var mySprite = allSprites[i];
        //mySprite.attractionPoint(1, mouseX, mouseY);
        
        mySprite.velocity.x = (mouseX-mySprite.position.x)/10;
        mySprite.velocity.y = (mouseY-mySprite.position.y)/10;
        mySprite.maxSpeed = 4;
        mySprite.displace(glitchArray);
        if(mySprite.mouseIsOver) {
            //mySprite.remove();
        }
    }
    
    drawSprites();
}

function click() {
    var glitch = createSprite(cnv.width/2, cnv.height/2);
    glitch.fill = random(palette);
    glitch.draw = function() { fill(glitch.fill) ;ellipse(0,0,40,40); };
    glitch.setCollider("circle", 0, 0, 80);
    glitch.mass = 3;
    glitchArray.add(glitch);
}
