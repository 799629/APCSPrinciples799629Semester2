//Kawika Tu
//03/02/20
//The setup function function is called once when your program begins
var balls = [];
var bombs = [];
var paddle;
var buttons = [];
var score = 0;
var health = 5;
var loadonce = 0;
var gameState = 1;
var highscore = [];
var startingBalls = 3;
var startingBombs = 1;
var highscore = 0;
var buttonEasy;
var trackingspeed = .09;
var buttonMedium;
var buttonHard;
var bColor = (5,5,5)
var groundDamage = 0;
var difficulty;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(6);
  score = 0;
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState===1){
    startscreen();
  }else if(gameState===2){
    playGame();
  }else if(gameState===3){
    endGame();
  }else if(gameState===4){
    runInstructions();
  }
}

function startscreen(){
  runButtons();
  textAlign(CENTER);
  textSize(90);
  fill(random(255),random(255),random(255));
  text("Paddle-ball", 400 + random(-4,4), 400 + random(-4,4));
}
function playGame(){
  background(5, 5, 5, 20);
  runGame();
  buttonEsc.run()
}

function loadObjects(n){
  paddle = new Paddle(200,600,200,30);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(0,300),random(-5,5),random(-5,5),i);
  }
  buttonEasy = new Button(200,500,180,90,"Easy",color(0, 255, 0),0);
  buttonMedium = new Button(400,500,180,90,"Medium",color(244, 232, 104),1);
  buttonHard = new Button(600,500,180,90,"Hard",color(255, 0, 0),2);
  buttonRules = new Button(400,600,180,90,"Rules",color(255),3);
  buttonBack = new Button(400,700,180,90,"Menu",color(255),4);
  buttonEsc = new Button(400,30,90,45,"Exit",color(25),5);
}

function runButtons(){
  buttonEasy.run();
  buttonMedium.run();
  buttonHard.run();
  buttonRules.run();
}

function runGame(){
  if(loadonce === 0){
    startGame(startingBalls);
    loadonce = 1;
  }
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
  for(var i = 0; i < bombs.length; i++){
    bombs[i].run();
  }
}

function startGame(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(0,300),random(-5,5),random(-5,5),i);
  }
  bombs[0] = new Bomb(random(width),random(0,200),random(-5,5),random(-5,5));
}

function endGame(){
  background(bColor);
  fill(200, 30, 150);
  //score = 0;
  textSize(45);
  fill(255);
  text("Try again", 400, 250);
  textSize(45);
  fill(255);
  text("Score: " + paddle.score, 400, 300);
  if(paddle.score > highscore){
    highscore = paddle.score;
    fill(255)
    textSize(60)
    text("New Highscore!!!",400,200)
    bColor = (0, 230, 100);
    textAlign(CENTER);
  }else if(paddle.score < highscore){
    textAlign(CENTER);
    textSize(60);
    fill(255);
    text("You Lost", 400, 200);
  }
  textSize(45);
  fill(255);
  score = 0;
  text("Highscore: " + highscore, 400, 350);
  buttonEasy.run();
  buttonMedium.run();
  buttonHard.run();
  buttonRules.run();
  health = 5;
  startingBombs = 1;
}

function runInstructions(){
  background(5,5,5);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Play by collecting balls with moving the paddle with the mouse", 400, 200);
  text("The larger red ball will add points when it hits the bottom of the paddle", 400, 250);
  text("watchout for balls hitting the bottom of your paddle as you will lose health", 400, 300);
  text("simply click on exit to leave the game and return to the menu", 400, 350)
  textSize(50);
  text("Have Fun!",400, 450)
  buttonBack.run();
}//end function runInstructions
