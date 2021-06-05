class Block{
    constructor(x,y){
      var Options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x,y,50,50,Options);
      this.width = 50;
      this.height = 50;
      World.add(world,this.body);
    }
    display() {  
      var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("BLUE");
      rect(0,0,this.width,this.height);
      pop();
    }
}