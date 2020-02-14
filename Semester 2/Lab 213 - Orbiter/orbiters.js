// Kawika Tu
// 8/21/2019

class Orbiter{
  constructor(x, y, dx ,dy, id){
    this.id = id
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.loc = createVector(x,y)
    this.vel = createVector(dx,dy)
    this.clr = color(random(255), random(255), random(255), random(255));
    var speed = 0.5;
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.loc.add(this.vel);
    this.x = boids[id].x * 100 * cos(angle);
    this.y = boids[id].y * 100 * sin(angle);
    this.arc(this.loc.x, this.loc.y, this.radius, 2*Math.PI, 0, false);
    angle += speed;
  }

  render(){
   fill(200);
   ellipse(this.loc.x, this.loc.y, 10, 10)
  }//end render

}//end class
