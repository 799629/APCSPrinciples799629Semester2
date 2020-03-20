//Kawika Tu
//03/02/20
//Attraction Repulsion
class Bomb{
  constructor(x,y,dx,dy,i){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.1);
    this.clr = color(255,10,10);
    this.w = 40;
    this.id = i;
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.removeBomb();
  }//run end
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }//render end
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -1*this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -1*this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -1*this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > 820){
      this.loc.y = 1;
    }
  }//checkEdges end

  isColliding(){
    if(this.loc.x > paddle.loc.x &&
      this.loc.x < paddle.loc.x + paddle.w &&
      this.loc.y > paddle.loc.y &&
      this.loc.y < paddle.loc.y + paddle.h){
        return true;
    }//if statement end
  }//isColliding end

  removeBomb(){
    for(var i = bombs.length - 1; i >= 0; i--){
      if(bombs[i].isColliding()){
        loadonce = 0;
        gameState = 3;
        bombs.splice(i,1);
      }//end if vel>0 statement
        if(health < .1){
          gameState = 3;
        }
      }//if statament end
    }//for loop end

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }//update end
  }//Class end
