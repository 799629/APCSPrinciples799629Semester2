//Kawika Tu
//09/03/19
//Attraction Repulsion
class Food{
  constructor(){
    this.loc = createVector((20*int(random(0,40))),(int(random(0,40))*20));
    this.clr = color(255,0,0);
    //this.id = id
  }

  run(){
      this.render();
      this.update();
  }

  update(){
    if((this.loc.y === snakeHeady) && (this.loc.x === snakeHeadx)){
      this.loc = createVector((20*int(random(0,40))),(int(random(0,40))*20));
      score = score + 1;
    }
  }//update end

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 20,20);
  }
}
