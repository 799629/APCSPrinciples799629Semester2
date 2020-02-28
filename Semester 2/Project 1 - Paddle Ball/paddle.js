//Kawika Tu
//09/03/19
//Attraction Repulsion
class Paddle{
  constructor(x,y,w,h){
    this.loc = createVector(x,y)
    this.clr = color(random(255),random(255),random(255));
    this.h = h
    this.w = w
    this.health = health
  }//constructor end
  run(){
    this.update();
    this.checkEdges();
    this.render();
  }//run end
  render(){
    rectMode(CORNER)
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.h)
  }//render end
  checkEdges(){
    if (this.loc.x < -1){
      this.loc.x  = 1
    }
    if(this.loc.x > 801 - this.w){
      this.loc.x = 800 - this.w
    }
  }//checkEdges end
  update(){
    var mouseLoc = createVector((mouseX-this.w/2), this.loc.y);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, trackingspeed);
    textSize(32);
    rectMode(CORNER)
    fill(0, 102, 153);
    this.score = score
    text("Score = " + this.score, 80, 30);
    fill(0, 102, 153);
    this.health = health
    text("Health = " + this.health, 700, 30);
  }
  }//Class end
