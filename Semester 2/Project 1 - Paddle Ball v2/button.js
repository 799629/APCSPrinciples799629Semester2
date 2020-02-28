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
    rect(this.loc.x, this.loc.y, this.w, this.h, 0);
    textAlign(CENTER);
    textSize(3);
    fill(this.textclr);
    text(this.text, this.loc.x, this.loc.y + this.h/4);
  }//creates button object

  mouseCheck(){
    if((mouseX > this.loc.x - this.w) && (mouseX < this.loc.x + this.w) && (mouseY > this.loc.y - this.h) && (mouseY < this.loc.y + this.h) && (mouseIsPressed)){
      if(this.id === 1){
        loadonce = 0;
        gameState = 1;
      }else if(this.id === 2){
        loadonce = 0;
        gameState = 2;
      }else if(this.id === 3){
        loadonce = 0;
        gameState = 4;
      }else if(this.id === 4){
        gameState = 5;
      }
    }//starts the game when a button is pressed
  }//end of mouseCheck
}//End of Class
