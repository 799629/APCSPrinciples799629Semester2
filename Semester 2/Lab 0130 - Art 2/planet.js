//Kawika Tu
//12/03/19
//Attraction Repulsion
class Planet{
  constructor(x,y,dx,dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0);
    this.clr = color(random(255),random(255),random(255));
    this.w = 50;
    //if(this.id < 0){this.w = 50;}
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }//render end
  checkEdges(){
      if(this.loc.x < 0){
        this.loc.x = width
      }
      if(this.loc.x > width){
        this.loc.x = 0
      }
      if(this.loc.y < 0){
        this.loc.y = height
      }
      if(this.loc.y > height){
        this.loc.y = 0
    }
  }//checkEdges end
  update(){
    var distToship;
    distToship = this.loc.dist(ship.loc);
    if(distToship < 100){
      //add attraction
      this.acc = p5.Vector.sub(attractor.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.02);
      this.loc = createVector(random(width), random(height))
    }
    this.loc.add(this.vel);
  }//update end
  }//Class end
