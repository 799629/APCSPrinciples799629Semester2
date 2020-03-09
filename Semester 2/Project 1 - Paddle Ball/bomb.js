//Kawika Tu
//03/02/20
//Attraction Repulsion
class Bomb{
  constructor(x,y,dx,dy,i){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.1);
    this.clr = color(255,10,10);
    this.w = 20;
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
        if(this.vel.y > 0){
          if(difficulty === 1){
            health = health - 1
          }else if(difficulty === 2){
            health = health - 2;
          }
          bombs.splice(i,1);
        }//end if vel>0 statement
        else if(this.vel.y < 0){
          if(difficulty === 0){
            health = health + 2
          }else if(difficulty === 1){
            health = health + 1
          }else if(difficulty === 2){
            health = health + 1
          }
          bombs.splice(i,1);
        }
        if(health < 1){
          gameState = 3;
        }
      }//if statament end
    }//for loop end
  }//removeBall end

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }//update end
  }//Class end
