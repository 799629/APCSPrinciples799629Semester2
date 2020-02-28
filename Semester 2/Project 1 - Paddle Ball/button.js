//Kawika Tu
//09/03/19
//Attraction Repulsion
class Button{
  constructor(x, y, w, h, text, clr, id){
    this.loc = createVector(x,y);
    this.w = w;
    this.h = h;
    this.clr = clr;
    this.textclr = color(0);;
    this.text = text;
    this.id = id;
  }
  run(){
    this.render();
    this.mouseCheck();
  }
  render(){
    rectMode(CENTER);
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h, 20);
    textAlign(CENTER);
    textSize(32);
    fill(this.textclr);
    text(this.text, this.loc.x, this.loc.y + this.h/4);
  }//creates button object

  mouseCheck(){
    if(mouseX > this.loc.x - this.w/2 && mouseX < this.loc.x + this.w/2 && mouseY > this.loc.y - this.h/2 && mouseY < this.loc.y + this.h/2 && mouseIsPressed){
      if(this.id === 0){
        startingBalls = 3;
        trackingspeed = 0.5;
        loadonce = 0;
        gameState = 2;
        groundDamage = 0;
      }else if(this.id === 1){
        startingBalls = 6;
        trackingspeed = 0.2;
        loadonce = 0;
        gameState = 2;
        groundDamage = .05;
      }else if(this.id === 2){
        startingBalls = 9;
        trackingspeed = 0.1;
        loadonce = 0;
        gameState = 2;
        groundDamage = .1
      }else if(this.id === 3){
        gameState = 4;
      }else if(this.id === 4){
        background(5, 5, 5);
        gameState = 1;
      }
    }//starts the game when a button is pressed
  }//end of mouseCheck
}//End of Class
