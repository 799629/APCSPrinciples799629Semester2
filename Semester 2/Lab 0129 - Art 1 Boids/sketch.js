//  Kawika Tu
// 	Date
//  This is a comment
//  The setup function function is called once when your program begins

var boids = [];
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5,5,5);
  fill(22, 30, 150);
  loadBoids(15)
}//End Setup

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(width),random(height), random(-4,4),random(-4,4));
  }
}//end loidboids

function draw(){
  background(color(0, 0, 0,5))
  runBoids();
}//end draw

function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }// end for loop
}// end runBoids
