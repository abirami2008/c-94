var ground, ground_image;
var beach, beach_image, rulebg, loadingbg;
var jake, jake_animation;
var logo, logo_image;
var playButton, playButton_img;
var friends, cubby, izzy, friendsgroup;
var treasure, treasuregroup, box1;
var money, moneygroup, rupees;
var jewellery, jewellerygroup, box2;
var bomb, bombgroup, blast;
var missile, missilegroup, miss;
var raft1, raft1_image, raft2, raft2_image, raft3, raft3_image, raft4, raft4_image, raft5, raft5_image, raft6, raft6_image;
var loading, loading_img;
var loadingRaft, loadingRaft_img;
var gameState = "splash screen";
var score=0;
var blastsound, win, checkpoint;
var gameOver, gameOver_img, restart, restart_img;
var a=0, timer=0;
var rulesbg, nextButtonimg, storybg, story, storyimg;
var easyButton, hardButton, raftsprite, raftspriteimg, raftbg;
var scoreboard, scoreboardImg, gamewin, gamewinImg;
var jumpImg, deadImg, gamelevel, thememusic, rulesImg;

function preload(){

//ground image

ground_image = loadImage("splash_3.png");
rulebg = loadImage("rules screen.jpg");
loadingbg = loadImage("loading screen.jpg");
nextButtonimg = loadImage("next button.gif");
storybg= loadImage("story screen.jpg")
easyButtonImage = loadImage("easybutton.png")
hardButtonImage = loadImage("hardbutton.png")
raftbg = loadImage("raftbg.gif")
scoreboardImg = loadImage("scoreboard.png")
gamewinImg = loadImage("gamewin.png")
jumpImg = loadImage("templerun/Jump__000.png","templerun/Jump__001.png","templerun/Jump__002.png","templerun/Jump__003.png","templerun/Jump__043.png","templerun/Jump__005.png","templerun/Jump__006.png","templerun/Jump__007.png","templerun/Jump__008.png");
deadImg = loadImage("templerun/Dead__000.png","templerun/Dead__001.png","templerun/Dead__002.png","templerun/Dead__003.png","templerun/Dead__004.png","templerun/Dead__005.png","templerun/Dead__006.png","templerun/Dead__007.png","templerun/Dead__008.png","templerun/Dead__009.png");
storyimg = loadImage("storybg.png")
rulesImg = loadImage("rules.png")

//logo
logo_image = loadImage("logo.png")

//play button
playButton_img = loadImage("play button.gif")

//loading 
loading_img = loadImage("loading.gif")

//loading Raft
loadingRaft_image = loadImage("loading_raft.gif")

//beach_image
beach_image = loadImage("beach.png");

//jake_aniamtion
jake_animation = loadAnimation("templerun/Idle__000.png","templerun/Idle__001.png","templerun/Idle__002.png","templerun/Idle__003.png");

  //cubby
  cubby = loadImage("octopus.gif");

  //Izzy
izzy = loadImage("urchin.gif");

//box1
box1 = loadImage("perl.png");

//rupees
rupees = loadImage("coin.png");

//box2
box2 = loadImage("ruby2.png");

//blast
  blast = loadImage("enemy4.gif");

//miss
miss = loadImage("shark.gif");

//blastsound
blastsound = loadSound("Bombblast.mp3");

//win
win = loadSound("Winning.mp3");

//checkPoint
checkPoint = loadSound("checkPoint.mp3");

thememusic = loadSound("thememusic.mp3");


//gameOver_image
gameOver_image = loadImage("gameOver.png");

//Restart_image
Restart_image = loadImage("Restartbutton.png");
raftspriteImg = loadImage("raft1.gif");

}

function setup(){

createCanvas(wiindowWidth, windowHeight)

//logo
logo=createSprite(width/2, 150, 70, 0)
logo.addImage("logo", logoImage)
logo.scale=0.6
  
nextbutton=createSprite(width-100, height-100, 70, 0)
nextbutton.addImage(nextButtonimg)
nextbutton.scale = 0.3
nextbutton.visible = false;

nextbutton1=createSprite(width-200, 200, 70, 0)
nextbutton1.addImage(nextButtonimg)
nextbutton1.scale = 0.3
nextbutton1.visible = false;

//loading
loading = createSprite(width/2, height/2)
loading.addImage("loading", loading_img)
loading.visible = false;

//story
story = createSprite(width/2,height/2)
story.visible = false;

//loadingRaft
loadingRaft = createSprite(width/2, height/2)
loadingRaft.addImage("loadingRaft",loadingRaft_img)
loadingRaft.visible = false;

//buttons for levels
easyButton = createSprite(width/2-200,height/2+200)
easyButton.addImage("easyButton",easyButtonImage)
easyButtom.scale= 0.2
easyButton.visible = false;

hardButton = createSprite(width/2+200,height/2+200)
hardButton.addImage("easyButton",hardButtonImage)
hardButtom.scale= 0.2
hardButton.visible = false;

//playButton
playButton = createSprite(width/2,550)
playButton.addImage(playButton_img)
playButton.scale= 0.6

//gameover
gameOver = createSprite(width/2, height/2)
gameOver.addImage(gameOver_img)
gameOver.scale= 0.25
gameOver.visible = false;
gameOver.setCollider("circle", -40,170,130)

//gamewin
gamewin = createSprite(width/2, height/2)
gamewin.addImage(gamewinImg)
gamewin.scale= 0.25
gamewin.visible = false;
gamewin.setCollider("circle", -40,500,150)

//raftSprit
raftsprite = createSprite(300, height-150)
raftsprite.addImage(raftspriteImg)
raftsprite.scale = 0.85
raftsprite.visible = false
raftsprite.setCollider("rectangle",0,120, raftsprite.width-100,80)

//jake
jake = createSprite(280,height-185,0,0)
jake.addAnimation("jake",jake_animation)
jake.addAnimation("jump",jumpImg)
jake.addAnimation("dead",deadImg)

jake.scale = 0.4
jake.visible = false
jake.setCollider("rectangle",0,0,jake.width-100,jake.height-10);

//scoreboard
scoreboard = createSprite(100,60)
scoreboard.addImage(scoreboardImg)
scoreboard.scale = 0.08
scoreboard.visible = false;

//story
story = createSprite(width/2, height/2+30)
story.addImage(storyimg)
story.visible = false
story.scale = 0.4

//rules
rules = createSprite(width/2, height/2-100)
rules.addImage(rulesImg)
rules.visible = false;
rules.scale = 0.25

//form groups
treasuregroup = new Group()
moneygroup = new Group()
friendsgroup = new Group()
jewellerygroup = new Group()
missilegroup = new Group()
bombgroup = new Group()

}

function draw(){

if(gameState === "splash screen"){
    background(ground_image)

if(mousePressedOver(playButton)){
  playButton.visible = false;
  logo.visible = false;
  gameState="story screen"
  thememusic.play();
  thememusic.setVolume(0.1);
}   

else if(gameState === "story screen"){
  background(storybg)
  story.visible= true;
  nextbutton.visible = true;
  if(mousePressedOver(nextbutton)){
    nextbutton.visible = false
    gameState= "rules screen"
  }
}

else if(gameState==="rules screen"){

  background(rulebg);
  story.visible = true;
  easyButton.visible = false;
  hardButton.visible = false;
  rules.visible = true;

  if(mousePressedOver(easyButton)){
    easyButton.visible = false;
    hardButton.visible = false;
    rules.visible = false;
    gameState = "loading Screen"
    gamelevel = "easy"
  }

  if(mousePressedOver(hardButton)){
    easyButton.visible = false;
    hardButton.visible = false;
    rules.visible = false
    gameState = "loading screen"
    gamelevel = "hard"
  }
}

else if (gameState=== "loading screen"){
  timer++;
  background(loadingbg);
  loading.visible = true;
  loadingRaft.visible = true;
  
  if (timer===200)
  {
    if(gamelevel === "easy")
    {
      gamestate = "play"
    }

    else if (gamelevel === "hard")
    {
      gamestate = "level 2 "
    }
  }
}

else if (gamestate === "play"){
  background(raftbg)
  loading.visible = false;
  loadingRaft.visible = false;
  jake.visible = true;
  scoreboard.visible =true; 
  raftsprite.visible = true;

  if (jake.isTouching(treasuregroup)){
    a=0;
    score= score + 1;
    treasuregroup.setLifeTimeEach(0);
    win.play()
  }

  if (jake.isTouching(moneygroup)){
    a=0;
    score= score + 5;
    treasuregroup.setLifeTimeEach(0);
    win.play()
  }

  if (jake.isTouching(bombgroup)){
    a=0;
    treasuregroup.setLifeTimeEach(0);
    gameState = "end"
    blastsound.play()
  }

  if (jake.isTouching(missilegroup)){
    a=0;
    treasuregroup.setLifeTimeEach(0);
    gameState = "end"
    blastsound.play()
  }

  if(a===0 && score!=0 && score % 10 === 0){
    checkPoint.play()
    a=1
  }

  if (frameCount % 250 === 0){
    var rand = Math.round(random(1,2));

    if(rand==1){
      spawnBomb();
    } 
    else if( rand== 2){
      spawnMissile(); 
    }
  }

  if(frameCount % 200=== 0){
    var rand = Math.round(random(1,2))

    if(rand == 1){
      spawnMoney();
    }
    else if(rand == 2){
      spawnTreasure();
    }
  }

  if(score>=10){
    gameState  = "win"
  }

}

else if (gameState === "level 2"){
  background(raftbg)
  loading.visible = false;
  loadingRaft.visible = false;
  jake.visible = true;
  scoreboard.visible =true; 
  raftsprite.visible = true;

  if (jake.isTouching(treasuregroup)){
    a=0;
    score = score+1;
    treasuregroup.setLifeTimeEach();
    win.play();
  }

  if (jake.isTouching(moneygroup)){
    a=0;
    score = score+2;
    treasuregroup.setLifeTimeEach();
    win.play();
  }

  if (jake.isTouching(jewellerygroup)){
    a=0;
    score = score+5;
    treasuregroup.setLifeTimeEach();
    win.play();
  }

  if (jake.isTouching(friendsgroup)){
    a=0;
    treasuregroup.setLifeTimeEach();
    gameState = "end";
    blastsound.play();
  }

  if (jake.isTouching(bombgroup)){
    a=0;
    treasuregroup.setLifeTimeEach();
    gameState = "end";
    blastsound.play();
  }

  if (jake.isTouching(missilegroup)){
    a=0;
    treasuregroup.setLifeTimeEach();
    gameState = "end";
    blastsound.play();
  }

  if( a===0 && score!=0 && score% 10 === 0){
    checkPoint.play();
    a=1
  }

  if( frameCount% 200 === 0){
    var rand =Math.round(random(1,3))

    if(rand==1){
      spawnBomb
    }

  }
}
}
}