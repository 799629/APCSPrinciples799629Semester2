// Kawika Tu
// 8/21/2019

class Boid{
  constructor(x, y, dx ,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.loc = createVector(x,y)
    this.vel = createVector(dx,dy)
    this.clr = color(random(255), random(255), random(255), random(255))
  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
  }
  }

  update(){
    this.loc.add(this.vel);
  }

  render(){
    stroke(this.clr)
    for(var i = 0; i < boids.length; i++){
      for(var j = 0; j < boids.length; j++){
        if(i != j){
          if(boids[j].loc.dist(boids[i].loc) < 200){
            line(boids[i].loc.x, boids[i].loc.y, boids[j].loc.x, boids[j].loc.y)
          }//end if statement
        }
      }
    }
  }//end render

}//end class
