var canvas;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10,
wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21;

var back, plyer, wll;
 
function preload(){
back = loadImage("images/backg.jpg");
plyer = loadImage("images/player.jpg");
wll = loadImage("images/wall.jpg");
}

function setup() {
  canvas = createCanvas(displayWidth - 50, displayHeight-155);

  player = createSprite(displayWidth/2 + 500, displayHeight - 173, displayWidth - 1346, displayHeight - 748);
  player.addImage("player", plyer);
  player.scale = 0.2;

  wall1 = createSprite(displayWidth - 866, displayHeight - 168, displayWidth - 50, displayHeight - 763);
  wall2 = createSprite(displayWidth - 666, displayHeight - 218, displayWidth - 50, displayHeight - 763);
  wall3 = createSprite(displayWidth - 1316, displayHeight - 268, displayWidth - 1000, displayHeight - 763);
  wall4 = createSprite(displayWidth - 1066, displayHeight - 328, displayWidth - 1361, displayHeight - 900);
  wall5 = createSprite(displayWidth - 1151, displayHeight - 328, displayWidth - 1200, displayHeight - 763);
  wall6 = createSprite(displayWidth - 846, displayHeight - 433, displayWidth - 300, displayHeight - 763);
  wall7 = createSprite(displayWidth - 316, displayHeight - 268, displayWidth - 50, displayHeight - 763);
  wall8 = createSprite(displayWidth - 566, displayHeight - 318, displayWidth - 1361, displayHeight - 670);
  wall9 = createSprite(displayWidth - 556, displayHeight - 368, displayWidth - 350, displayHeight - 763);
  wall10 = createSprite(displayWidth - 686, displayHeight - 498, displayWidth - 150, displayHeight - 763);
  wall11 = createSprite(displayWidth - 76, displayHeight - 550, displayWidth - 1361, displayHeight - 400);
  wall12 = createSprite(displayWidth - 776, displayHeight - 588, displayWidth - 175, displayHeight - 763);
  wall13 = createSprite(displayWidth - 1166, displayHeight - 563, displayWidth - 1361, displayHeight - 720);
  wall14 = createSprite(displayWidth - 1016, displayHeight - 523, displayWidth - 1361, displayHeight - 720);
  wall15 = createSprite(displayWidth - 866, displayHeight - 563, displayWidth - 1361, displayHeight - 720);
  wall16 = createSprite(displayWidth - 716, displayHeight - 523, displayWidth - 1361, displayHeight - 720);
  wall17 = createSprite(displayWidth - 566, displayHeight - 563, displayWidth - 1361, displayHeight - 720);
  wall18 = createSprite(displayWidth - 416, displayHeight - 523, displayWidth - 1361, displayHeight - 720);
  wall19 = createSprite(displayWidth - 266, displayHeight - 563, displayWidth - 1361, displayHeight - 720);
  wall20 = createSprite(displayWidth - 675, displayHeight - 680, displayWidth - 170, displayHeight - 763);
  wall21 = createSprite(displayWidth - 1356, displayHeight - 645, displayWidth - 1361, displayHeight - 655);

}

function draw() {
  background(back);

  textSize(30);
  text("Entry", displayWidth/2 + 540, displayHeight - 173);
  text("Exit", displayWidth - 1306, displayHeight - 703);

  if(keyIsDown(UP_ARROW)){
    player.velocityX = 0;
    player.velocityY = -5;
  }
  if(keyIsDown(DOWN_ARROW)){
    player.velocityX = 0;
    player.velocityY = 5;
  }  
  if(keyIsDown(LEFT_ARROW)){
    player.velocityY = 0;
    player.velocityX = -5;
  }
    if(keyIsDown(RIGHT_ARROW)){
    player.velocityY = 0;
    player.velocityX = 5;
  }
  
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);
  player.collide(wall21);

    
  drawSprites();
}