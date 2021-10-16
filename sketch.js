
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg1, bg2, bg3, rock1, rock2, meteor1, meteor2, debris, wormhole1, wormhole2, obstaclesGroup;

function preload() {
  bg1 = loadImage("bg_1.jpg");
  bg2 = loadImage("bg_2.jpeg");
  bg3 = loadImage("bg_3.png");
  rock1 = loadImage("rock_1.png");
  rock2 = loadImage("rock_2.png");
  meteor1 = loadImage("hdm.png");
  meteor2 = loadImage("fire.png");
  debris = loadImage("space_debris.png");
  wormhole1 = loadImage("Wormhole.png");
  wormhole2 = loadImage("Wormhole_2.png");
  rocket = loadImage("rocket.png");
  enemy = loadImage("Enemy.png");

}
function setup() {
  createCanvas(displayWidth, displayHeight);
  createSprite(400, 200, 50, 50);
  background1 = createSprite(width / 2, height / 2, width, height);
  background1.addImage(bg1);
  background1.velocityX = -5;
  background1.scale = 2.3;

  rocket_hmc = createSprite(width / 2 - 100, height / 2, 100, 100)
  rocket_hmc.addImage(rocket);
  rocket_hmc.scale = 1;

  obstaclesGroup = new Group()
}

function draw() {
  background(255, 255, 255);

  if (gameState == PLAY) {
    if (background1.x < 0) {
      background1.x = 550;
    }

    if (keyDown(LEFT_ARROW)) {
      rocket_hmc.x = rocket_hmc.x - 5;
    }
    if (keyDown(RIGHT_ARROW)) {
      rocket_hmc.x = rocket_hmc.x + 5;
    }

    obstacles();

    if (obstaclesGroup.isTouching(rocket_hmc)) {
      gameState = END;
    }
  }

  if (gameState == END) {
    obstaclesGroup.destroyEach;
    background1.velocityX = 0;
  }


  drawSprites();
}

function obstacles() {
  if (frameCount % 100 == 0) {
    var obstacle = createSprite(random(50, width - 50) - 50, 10, 12)
    var rand = Math.round(random(1, 3));
    if (rand == 1) {
      obstacle.addImage(meteor1);

    }

    if (rand == 2) {
      obstacle.addImage(meteor2);

    }

    if (rand == 3) {
      obstacle.addImage(enemy);
      obstacle.scale = 0.35;
    }
    obstacle.velocityY = 5;
    obstaclesGroup.add(obstacle);
  }

}