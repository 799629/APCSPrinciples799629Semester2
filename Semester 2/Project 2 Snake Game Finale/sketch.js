var snakeHead;
var score = 0;
var highScore = 0;
var direction = 2;
var gameState = 0;
var snakeArray = [];
var tempArray = [];
var loadOnce = 0;
var buttonRules;
var buttonExit;
var buttonOptions;
var buttonPlay;
var buttonBack;
var midX;
var midY;

function setup(){
  var cnv = createCanvas(1300, 780);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  textFont('Georgia');
  fill(200, 30, 150);
  loadObjects();
  startGame();
  score = 0;
  snakeHead = snakeArray[0];
  food = new Food();
  //frameRate(46)
  frameRate(30)
  draw();
}//end function setup

//  The draw function is called @ 30 fps
function draw(){
  //background(5, 5, 5)
  if(gameState === 0){//startScreen
    frameRate(30)
    startScreen();
  }else if(gameState === 1){//runGame
    if(loadOnce === 0){
      startGame()
      loadOnce = 1
    }
    frameRate(10)
    runGame()
  }else if(gameState === 2){//endGame
    frameRate(30)
    endGame()
  }else if(gameState === 3){//rulesScreen
    frameRate(30)
    rulesScreen();
  }
}//end draw function

function loadObjects(){
  var midX = (width/2);
  var midY = (height/2);
  buttonPlay = new Button(midX,midY+140,260,130,"Play",color(255),0);
  buttonRules = new Button(midX-300,midY+140,260,130,"Rules",color(255),1);
  buttonBack = new Button(midX,midY+310,180,90,"Back",color(255),2);
  buttonExit = new Button(midX,30,180,90,"Exit",color(80),3);
  buttonOptions = new Button(midX+300,midY+140,260,130,"Options",color(255),4)
  snakeArray[0] =  new Snake(400,400,0)
  console.log(snakeArray);
}

function startScreen(){
  frameRate(30)
  textAlign(CENTER);
  textSize(110);
  fill(random(100),random(255),random(255));
  text("The Snake Game", (width/2) + random(-4,4), (height/2)-100 + random(-4,4));//title
  //蛇游戏
  textSize(50);
  fill(random(100),random(255),random(255));
  text("welcome to:", (width/2) + random(-2, 2), (height/2)-200 + random(-2, 2));
  buttonRules.run();
  buttonPlay.run();
  buttonOptions.run();
}//end function startScreen

function rulesScreen(){
  background(5, 5, 5);
  frameRate(30)
  textAlign(CENTER);
  textSize(50);
  fill(255,255,255);
  text("The Snake Game", (width/2), (height/2)-250);//title
  text("Collect food to increase your score", (width/2), (height/2)-150);
  text("Don't try and move into yourself or you will die", (width/2), (height/2)-50);
  text("Running into the walls also kills", (width/2), (height/2)+50);
  text("Learn the rest of the rules through playing", (width/2), (height/2)+150);
  buttonBack.run();
}


function startGame(){
  snakeArray = [];
  snakeArray[0] =  new Snake(400,400,0);
  score = 0;
}

function runGame(){
  background(0,0,0);
  buttonExit.run();
  console.log(snakeArray);
  var oldScore = score;
  for(var j = snakeArray.length - 1; j > -.1; j--){
    if(gameState === 1){
      console.log("j is " + j);
      snakeArray[j].run()
    }//end if statement
  }//end for loop
  if(gameState ===1){
    food.run()
  }
  if(oldScore != score && gameState === 1){
      grow()
  }
  //tempArray = snakeArray;
}//end function runGame

function grow(){
  var n = snakeArray.length;
  console.log("the snakeArray is " + str(n) + " segments long");
  console.log("");
  var x = snakeArray[n-1].loc.x
  var y = snakeArray[n-1].loc.y
  snakeArray[n] = new Snake(x,y,n)
  snakeArray[n+1] = new Snake(0,0,n+1)
}

function endGame(){
  background(0,0,0,20);
  buttonRules.run();
  buttonPlay.run();
  buttonOptions.run();
  fill(random(100),random(255),random(255));
  textSize(96);
  text("Score: " + score, width/2 - 150 + random(-4,4), height/2 - 200 + random(-4,4));
  if(score > highScore){
    highScore = score;
    fill(255)
    text("New Highscore!!!",)
  }
  //text("Current Score: " + score)
  text("Highscore: " + highScore, 400 + random(-4,4), 350 + random(-4,4));
}
