//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var balls = [];
var buttons = [];

var p1paddle;
var p1score = 0;
var p1health = 10;
var p2paddle;
var p2score = 0;
var p2health = 10;

var loadonce = 0;
var gameState = 1;
var gameMode = 0;
var highscore = 0;
var buttonPlay;
var trackingspeed = .09;
var startingBalls = 1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(6);
  score = 0;
}

//  The draw function is called @ 30 fps
function draw(){
  //controls what screen is showing
  if(gameState===1){
    startscreen();
  }else if(gameState===2){
    runGame();
  }else if(gameState===3){
    endGame();
  }else if(gameState===4){
    runInstructions();
  }else if(gameState===5){
    runOptions();
  }
}//end draw

function loadObjects(n){
  p1paddle = new Paddle(200,700,200,30,1);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(0,300),random(-5,5),random(-5,5),i);
  }
  buttonPlay = new Button(200,500,180,90,"Run",color(0, 255, 0),1);
  buttonOptions = new Button(400,500,180,90,"Options", color(225),2)
  buttonRules = new Button(400,600,180,90,"Rules",color(255),3);
  buttonBack = new Button(400,700,180,90,"Menu",color(255),4);
}

function startscreen(){
  //buttonRun.run();
  buttonOptions.run();
  buttonRules.run();
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text("Paddle-ball", 400, 300);
}

function runGame(){
  background(255, 255, 255, 20);
  if(loadonce === 0){
    startGame(startingBalls);
    loadonce = 1;
  }
  p1paddle.run();
  p2paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}// end funtion runGame

function runOptions(){
  //ADD SLIDERS AND OTHER UI
  buttonBack.run();
}//end funtion runOptions

function startGame(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(0,300),random(-5,5),random(-5,5));
  }
}

function endGame(){
  background(bColor);
  fill(200, 30, 150);
  score = 0;
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text("You Lost", 400, 200);
  textSize(45);
  fill(255);
  text("Try again", 400, 250);
  textSize(45);
  fill(255);
  text("Score: " + paddle.score, 400, 300);

  //MUST CHANGE THIS TO HAVE TWO SCORES
  if(paddle.score > highscore){
    highscore = paddle.score;
    fill(255)
    text("New Highscore!!!")
    bColor = (0, 230, 100);
  }//end if statement

  textSize(45);
  fill(255);
  text("Highscore: " + highscore, 400, 350);
  buttonPlay.run();
  buttonRules.run();
  buttonBack.run();
  health = 21;
}

function runInstructions(){
  background(255,255,255);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Play by collecting balls with moving the paddle with the mouse", 400, 200);
  text("watchout for balls hit-ting the bottom of your paddle as you will lose health", 400, 300);
  buttonBack.run();
}
