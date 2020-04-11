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
    textSize(64);
    if(this.id === 3){
      textSize(32)
    }
    fill(this.textclr);
    text(this.text, this.loc.x, this.loc.y + this.h/4);
  }//creates button object

  mouseCheck(){
    if(mouseX > this.loc.x - this.w/2 && mouseX < this.loc.x + this.w/2 && mouseY > this.loc.y - this.h/2 && mouseY < this.loc.y + this.h/2 && mouseIsPressed){
      if(this.id === 0){
        background(5, 5, 5);
        gameState = 1;
      }else if(this.id === 1){
        background(5, 5, 5);
        gameState = 3;
      }else if(this.id === 2){
        background(5, 5, 5);
        gameState = 0;
      }else if(this.id === 3){
        background(5, 5, 5);
        this.reset()
        gameState = 2;
      }
    }//starts the game when a button is pressed
  }//end of mouseCheck

  reset(){
    snakeHead = 0;
    direction = 2;
    gameState = 2;
    snakeArray = [];
    tempArray = [];
    loadOnce = 0;
    food = new Food();
  }//reset end

}//End of Class
