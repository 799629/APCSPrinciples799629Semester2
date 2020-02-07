//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var ships = [];
var attractor;
var repeller;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls();
  loadShips(40);
}

//  The draw function is called @ 30 fps
function draw() {
  background(0,0,0, 2);
  runBalls();
  runShips();
}
function loadBalls(n){
  attractor = new Ball(width/2, height/2, random(-2,2), random(-2,2), -1)
  repeller = new Ball(width/2, height/2, random(-2,2), random(-2,2), -1)
  for(var i = 0; i < n; i++){
    ships[i] = new Ship(random(width), random(height), random(-1, 1), random(-1, 1), i);
  }
}//loads balls into array
function runBalls(){
  attractor.run();
  repeller.run();
}//runs the balls

function loadShips(n){
  for(var i = 0; i < n; i++){
    ships[i] = new Ship(random(width), random(height), random(-1, 1), random(-1, 1), i);
  }
}

function runShips(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }
}//runs the ships
