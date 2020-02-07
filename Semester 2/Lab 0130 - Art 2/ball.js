//Kawika Tu
//09/03/19
//Attraction Repulsion
class Ball{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0);
    this.clr = color(random(255),random(255),random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0){this.w = 50;}
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    //this.render();
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
    var distToattractor;
    var distTorepeller;
    distToattractor = this.loc.dist(attractor.loc);
    distTorepeller = this.loc.dist(repeller.loc);
    if(this.id >= 0){
      if(distToattractor < 250){
        //add attraction
        this.acc = p5.Vector.sub(attractor.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distTorepeller < 150){
        //add repulsion
        this.acc = p5.Vector.sub(this.loc, repeller.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
      this.vel.add(this.acc);
    }
    if(this.id < 0){
      if(distToattractor < 400){
        //add attraction
        this.acc = p5.Vector.sub(attractor.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distToattractor < 100){
        //add repulsion
        this.acc = p5.Vector.sub(this.loc, attractor.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
      this.vel.add(this.acc);
    }
    if(this.id < 0){
      if(distTorepeller < 300){
        //add attraction
        this.acc = p5.Vector.sub(repeller.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distTorepeller < 100){
        //add repulsion
        this.acc = p5.Vector.sub(this.loc, repeller.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
      this.vel.add(this.acc);
    }
    this.loc.add(this.vel);
  }//update end
  }//Class end
