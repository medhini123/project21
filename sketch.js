var fishImg, fish, fish2Img, fish2;
var oceanImg, ocean;
var sharkImg, shark;
var play = 1;
var end = 0;
var score = 0;
var gamestate = 1;
var coralsgroup;
var fish2Group;
var coralImg, corals;
localStorage["HighestScore"] = 0;

function preload() {
  oceanImg = loadImage("underwater-gif-9.gif");
  fishImg = loadAnimation("fish-r.png", "fish2-r.png");
  sharkImg = loadAnimation("shark.png", "shark-r2.png");
  coralImg = loadImage("coral.png");
  fish2Img = loadImage("fishhit.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  fish = createSprite(500, 400);
  fish.scale = 1;
  fish.addAnimation("fishy", fishImg);
  shark = createSprite(200, 400);
  shark.scale = 4;
  shark.addAnimation("sharky", sharkImg);
}

function draw() {
  background(oceanImg);
  drawSprites();
  textSize(15);
  textStyle("bold");
  fill("red");
  text("Score:-" + score, width / 2 - 80, height / 2 - 40);

  if (gamestate === play) {
    fish.y = World.mouseY;
    shark.y = World.mouseY;

    edges = createEdgeSprites();
    fish.collide(edges);
    shark.collide(edges);

    createcorals();
    createfish2();

    if(coralsgroup.isTouching(fish)){
corals.destroyEach()
score=score+10
    }
  } else if (fish2Group.isTouching(fish)) {
    gamestate = end;

    if(fish.isTouching(fish2)){
fish.destroy()

coralImg.velocityXEach(0)
fish2.velocityXEach(0)
    }
  }
}

function createcorals() {
  if (World.frameCount % 80 === 0) {
    corals = createSprite(Math.round(random(10, 1000), 200, 400, 10));
    corals.velocityX = -5;
    corals.addImage("core", coralImg);
    //console.log('display coral',frameCount)
    corals.scale = 0.1;

    (shark.depth = corals.depth), shark.depth + 5;

    corals.lifetime = 120;
    coralsgroup.add(corals);

    //console.log("shark depth is", shark.depth);
    //console.log("coral depth is", corals.depth);
  }
}

function createfish2() {
  if (World.frameCount % 100 === 0) {
    fish2 = createSprite(Math.round(random(10, 1000), 100, 50, 10));
    fish2.velocityX = -5;
    fish2.addImage("fish", fish2Img);
    fish2.scale = 0.1;
    fish2.lifetime = 120;
    fish2Group.add(fish2);
  }
}
