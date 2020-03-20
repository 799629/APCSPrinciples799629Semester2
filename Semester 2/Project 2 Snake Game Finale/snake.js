//Kawika Tu
//09/03/19
//Project 2 - Snake Game
class Snake{
  constructor(x,y,index){
    this.loc = createVector(x,y)
    this.index = index
    if(this.index === 0){
      this.clr = color(0,200,250)
    }
    else{this.clr = color(250,250,250);
    }
  }//constructor end

  run(){
    this.update();
    this.control();
    this.render();
    this.checkEdges();
  }//run end

  render(){
    rectMode(CORNER)
    fill(this.clr);
    console.log("x.loc = " + this.loc.x + ". y.loc = " + this.loc.y);
    rect(this.loc.x,this.loc.y,20,20)
  }//render end

  control(){
    if(keyCode === UP_ARROW){
      if(direction === 3){
        gameState = 0 //this needs to be changed later
        this.reset()
        console.log("you died, cannot go back into yourself")
      }else{
        direction = 1
      }
    }else if(keyCode === RIGHT_ARROW){
      if(direction === 4){
        this.reset()
        gameState = 0 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else{
        direction = 2
      }
    }else if(keyCode === DOWN_ARROW){
      if(direction === 1){
        this.reset()
        gameState = 0 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else{
        direction = 3
      }
    }else if(keyCode === LEFT_ARROW){
      if(direction === 2){
        this.reset()
        gameState = 0 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else{
        direction = 4
      }
    }
  }//end control

  checkEdges(){
    if (this.loc.x < -1){
      gameState = 2 //this needs to be changed later
      console.log("you died, exceeds left constraint")
    }
    if(this.loc.x > 801 - 5){
      gameState = 2 //this needs to be changed Later
      console.log("you died, exceeds right constraint")
    }
    if(this.loc.y < -1){
      gameState = 2 //this needs to be changed later
      console.log("you died, exceeds top constraint")
    }
    if(this.loc.y > 801){
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
    var snakeHeadx = 0;
    var snakeHeady = 0;
    var snakeHead;
    var score = 0;
    var direction = 2;
    var gameState = 0;
    var snakeArray = [];
    var tempArray = [];
    var loadonce = 0;
    snakeArray[0].loc = createVector(400,400)
  }//reset end

  update(){
    console.log("this index is" + this.index);
    for(i = 0; i < snakeArray.length; i++){
      console.log(snakeArray[i].loc);
    }
    if(this.index > 0){
      var i = this.index
      console.log("snake array - 1 === " + snakeArray[i-1].loc);
      snakeArray[i].loc = snakeArray[i - 1].loc;
      console.log("tail snakeArray[i].index === " + snakeArray[i].index);
    }else if(this.index === 0){
      console.log("the snake head is moving");
      console.log("The Direction is === " + direction);
      snakeHead = snakeArray[0];
      if(direction === 1){//up
        this.loc = createVector(this.loc.x, this.loc.y - 20)
      }else if (direction === 2){//right
        this.loc = createVector(this.loc.x + 20, this.loc.y)
      }else if (direction === 3){//down
        this.loc = createVector(this.loc.x, this.loc.y + 20)
      }else if (direction === 4){//left
        this.loc = createVector(this.loc.x - 20, this.loc.y)
      }
      snakeHeadx = this.loc.x;
      snakeHeady = this.loc.y;
    }//end if this.index === 0
    else{
      console.log("This works");
    }//else ends
  }//update end


}//Class end//
