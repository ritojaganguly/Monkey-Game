
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  foodGroup = new Group();
  obstacleGroup = new Group();
 
}



function setup() {
  createCanvas(400, 400)
 
  monkey = createSprite (50, 350, 20, 20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite (200, 350, 900, 10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  
}


function draw() {
  background ("white")
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: " + score, 500, 50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50)
  if (keyDown("space") && monkey.y >= 159){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  if (ground.x < 0){
    ground.x = ground.width/2
  }
  monkey.collide(ground)
  
  
  food();
  obstacles();
  drawSprites();
}

function food(){
  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,20,20)
    banana.y = Math.round(random(120,200))
    banana.addImage("banana", bananaImage)
    banana.velocityX = -4
    banana.lifetime = 150
    banana.scale = 0.1
    foodGroup.add(banana)
  }
}

function obstacles(){
  if(frameCount % 300 === 0) {
    obstacle = createSprite(600,330,10,40);
    obstacle.addImage("obstacle", obstacleImage)
    obstacle.velocityX = -4
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacle.collide(ground)
    obstacleGroup.add(obstacle);
  }
}


