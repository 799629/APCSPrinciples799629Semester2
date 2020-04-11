class Snake{
  constructor(x,y,index){
    this.loc = createVector(x,y)
    console.log(this.loc);
    this.index = index
    if(this.index === 0){
      this.clr = color(0,200,250)
    }
    else{this.clr = color(250,250,250);
    }
  }//constructor end

  run(){
    //this.control();
    this.update();
    this.control();
    this.render();
    this.checkEdges();
  }//run end

  render(){
    rectMode(CORNER)
    fill(this.clr);
    //console.log("x.loc = " + this.loc.x + ". y.loc = " + this.loc.y);
    rect(this.loc.x,this.loc.y,20,20)
  }//render end

  control(){
    if(keyCode === UP_ARROW){
      if(direction === 3 && snakeArray.length > 1){
        gameState = 2 //this needs to be changed later
        this.reset()
        console.log("you died, cannot go back into yourself")
      }else if(snakeHead.loc.x%20 === 0 && snakeHead.loc.y%20 === 0){
        direction = 1;
      }
    }else if(keyCode === RIGHT_ARROW){
      if(direction === 4 && snakeArray.length > 1){
        this.reset()
        gameState = 2 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else if(snakeHead.loc.x%20 === 0 && snakeHead.loc.y%20 === 0){
        direction = 2;
      }
    }else if(keyCode === DOWN_ARROW){
      if(direction === 1 && snakeArray.length > 1){
        this.reset()
        gameState = 2 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else if(snakeHead.loc.x%20 === 0 && snakeHead.loc.y%20 === 0){
        direction = 3;
      }
    }else if(keyCode === LEFT_ARROW){
      if(direction === 2 && snakeArray.length > 1){
        this.reset()
        gameState = 2 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else if(snakeHead.loc.x%20 === 0 && snakeHead.loc.y%20 === 0){
        direction = 4
      }
    }
  }//end control

  checkEdges(){
    if (this.loc.x < -5){
      this.reset();
      gameState = 2 //this needs to be changed later
      console.log("you died, exceeds left constraint")
    }
    if(this.loc.x > width+5){
      this.reset();
      gameState = 2 //this needs to be changed Later
      console.log("you died, exceeds right constraint")
    }
    if(this.loc.y < -5){
      this.reset();
      gameState = 2 //this needs to be changed later
      console.log("you died, exceeds top constraint")
    }
    if(this.loc.y > height+5){
      this.reset();
      gameState = 2 //this needs to be changed later
      console.log("you died, exceeds bottom constraint")
    }
    for(var n = snakeArray.length; n > 0; n--){
      if(snakeArray[0].loc === snakeArray[n]){
        console.log("IT IS IN THE WAY");
        gameState = 2
      }
    }
  }//checkEdges end

  reset(){
    snakeHead = 0;
    direction = 2;
    gameState = 2;
    snakeArray = [];
    tempArray = [];
    loadOnce = 0;
    food = new Food();
    //snakeArray.loc = createVector(width/2,height/2)
  }//reset end

  update(){
    textSize(32);
    rectMode(CORNER)
    fill(0, 102, 153);
    this.score = score
    text("Score = " + this.score, 80, 30);
    if(this.index > 0 && gameState === 1){//snake boay
      var i = this.index
      this.loc = snakeArray[i - 1].loc;
    }else if(this.index === 0){
      snakeHead = snakeArray[0];
      if(direction === 1){       //up
        this.loc = createVector(this.loc.x, this.loc.y -20);
      }else if (direction === 2){//right
        this.loc = createVector(this.loc.x +20, this.loc.y);
      }else if (direction === 3){//down
        this.loc = createVector(this.loc.x, this.loc.y +20);
      }else if (direction === 4){//left
        this.loc = createVector(this.loc.x -20, this.loc.y);
      }
    }//end if this.index === 0
    else{
      console.log("This works");
    }//else ends
  }//update end


}//Class end//
