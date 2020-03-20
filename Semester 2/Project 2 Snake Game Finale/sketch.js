//  Kawika Tu
// 	10/31/19
//  The setup function function is called once when your program begins
var snakeHeadx = 0;
var snakeHeady = 0;
var snakeHead;
var score = 0;
var direction = 2;
var gameState = 0;
var snakeArray = [];
var tempArray = [];
var loadonce = 0;

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  startGame();
  score = 0;
  snakeHead = snakeArray[0];
  food = new Food();
  frameRate(10)
  draw();
}//end function setup

//  The draw function is called @ 30 fps
function draw(frameRate){
  background(5, 5, 5)
  if(gameState === 0){
    background(0,0,0);
    textSize(80);
    fill(266);
    text("Snake Game", 170, 300);//title
    textSize(50);
    text("Press the space bar to begin", 160, 500);
    if(keyCode === 32){//if space is pressed, the game
        gameState = 1;
        score = 0;
    }// if statement end
  }// gameState if statement end
  if(gameState === 1){
    runGame()
  }else if(gameState === 2){
    console.log("hello world");
  }
}//end draw function

function startGame(){
  snakeArray[0] =  new Snake(400,400,0)
  console.log(snakeArray);
}

function runGame(){
  console.log(snakeArray);
  var oldScore = score;
  for(var j = snakeArray.length - 1; j > -.1; j--){
    snakeArray[j].run()
  }//end for loop
  food.run()
  if(oldScore != score){
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
  snakeArray[n] = new Snake(0,0,n)
  snakeArray[n+1] = new Snake(0,0,n+1)
}
