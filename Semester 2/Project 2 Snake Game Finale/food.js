class Food{
  constructor(){
    this.loc = createVector((20*int(random(0,int(width/19)))),(int(random(0,int(height/19)))*20));
    this.clr = color(255,0,0);
    //this.id = id
  }

  run(){
      this.render();
      this.update();
  }

  update(){
    if((this.loc.y ===
      snakeHead.loc.y) &&
      (this.loc.x ===
        snakeHead.loc.x)){
      this.loc = createVector((20*int(random(0,40))),(int(random(0,40))*20));
      score = score + 2;
    }
  }//update end

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 20,20);
  }
}
