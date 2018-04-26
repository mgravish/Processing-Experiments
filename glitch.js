var cnv, img, glitch, glitchArray;

function preload() {
    img = loadImage('imgs/glitch.svg');
    clear();
}

function setup() {
    pixelDensity(2.0);
    smooth();
    //noCursor();
    cnv = createCanvas(windowWidth, windowHeight);
    glitchArray= new Group();
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
    var glitch = createSprite(mouseX-100, mouseY);
    glitch.addImage(img);
    glitch.mouseActive = true;
    glitch.setCollider("circle", 0, 0, 80);
    glitch.mass = 3;
    glitchArray.add(glitch);
}
