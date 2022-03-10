//boilerplate
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;

var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound
//
function preload(){

 
  trex_collided = loadAnimation("trex_collided.png");
  groundImage = loadImage("ground.png");
  cloudImage = loadImage("cloud.png");
  trex_running = loadAnimation("trex1.png",
  "trex3.png","trex4.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  restartImg = loadImage("restart.png")//project?
  gameOverImg = loadImage("gameOver.png")


  
}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(50,180,20,50);
  trex.scale = 0.5;

  trex.addAnimation("running", trex_running);
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
 
}

function draw() {
  //setting the background
  background(255);
  //displaying score
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")&& trex.y >= +100) {
      trex.velocityY=-10;

      // make the player jump

    }
    //complete adding the gravity
    trex.velocityY = trex.velocityY + 0.5
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles on the ground
    spawnObstacles()
    
  
  drawSprites();
}


function spawnObstacles(){
  if (frameCount %  60==0){    
    
//Creat the obstacle sprite at x=800,y=165,w=10,h=40
    
    obstacle.velocityX = -6;
     var rand = Math.round(random(1,6));  //sa   4 
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);  
               break;
       default: break;
     }
     obstacle.scale = 0.5;    
    }
 }
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 == 0) {
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    //adjust the depth
  
    
    //adding cloud to the group
    cloudsGroup.add(cloud);
  }
}
var obstacle =createSprite(800,165,10,40);
