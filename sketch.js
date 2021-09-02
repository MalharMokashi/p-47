var edges;
var bg;
var police,policeImg;
var thief1,thief2,thief1Img,thief2Img,thief1Flipped,thief2Flipped;
var gun,gunImg,bullet,bulletImg;

function preload()
{
  bg = loadImage("./Images/Background.jpg");
  policeImg = loadGif("./Images/Police Walking.gif");
  thief1Img = loadGif("./Images/Thief1.gif");
  thief2Img = loadGif("./Images/Thief2.gif");
  gunImg = loadImage("./Images/gun.png");
  bulletImg = loadImage('./Images/bullet.png');
  thief1Flipped = loadGif('./Images/thief1Flipped.gif');
  thief2Flipped = loadGif('./Images/thief2Flipped.gif');
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

   police = createSprite(40,350,50,50);
   police.addImage(policeImg);
   police.scale = 1.5;

 gun = createSprite(950,50,20,20);
 gun.addImage(gunImg);
 gun.scale = 0.35;

 bullet = createSprite(950,650,20,20);
 bullet.addImage(bulletImg);
 bullet.scale = 0.2;
 bullet.visible = true;

 thief1 = createSprite(50,50,20,20);
 thief1.addImage(thief1Img);
 thief1.scale = 0.05;
 thief1.velocityX = 2;
 thief1.velocityY = 1.3;

 thief2 = createSprite(950,650,20,20);
 thief2.addImage(thief2Img);
 thief2.scale = 0.5;
 thief2.velocityX = -2;
 thief2.velocityY = -1;
 thief2.debug = true;
 thief2.setCollider('rectangle',0,0,50,50);

 leftWall = createSprite(0,350,20,700);
 rightWall = createSprite(1000,350,20,700);
 topWall = createSprite(500,0,1000,20);
 bottomWall = createSprite(500,700,1000,20);

  edges = createEdgeSprites();
  thief1.collide(leftWall);
  thief1.collide(rightWall);
  thief2.collide(leftWall);
  thief2.collide(rightWall);
  thief1.collide(topWall);
  thief1.collide(bottomWall);
  thief2.collide(topWall);
  thief2.collide(bottomWall);

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(200);
  if(keyDown("right"))
  {
    police.velocityX = 3;
  }
  if(keyDown("left"))
  {
    police.velocityX = -3;
  }
  if(keyDown("up"))
  {
    police.velocityY = -3;
  }
  if(keyDown("down"))
  {
    police.velocityY = 3;
  }
  if(police.isTouching(gun))
  {
    gun.x=police.x+70;
    gun.y=police.y;
  }
  if(thief1.isTouching(leftWall))
  {
    thief1.addImage(thief1Flipped);
    thief1.velocityX = 2;
    thief1.velocityY = 1;
  }
  if(thief2.isTouching(leftWall))
  {
    thief2.addImage(thief2Flipped);
    thief2.velocityX = 2;
    thief2.velocityY = 1;
  }
  else{
    if(thief2.isTouching(rightWall))
    {
      thief2.addImage(thief2Img);
      thief2.velocityX = -1;
      thief2.velocityY = -1;
    }
  }

  drawSprites();
}


