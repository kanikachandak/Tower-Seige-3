class Polygon {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      };
      this.body = Bodies.circle(100,500,20, options);
      this.radius = 20;
      this.img= loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.img, 0, 0, this.radius+20,  this.radius+20); 
      pop();                                          
    }
  }
  