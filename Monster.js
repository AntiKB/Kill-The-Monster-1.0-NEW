class Monster{
  constructor(x,y,width,height){
    var Options = {
        'isStatic':false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,Options);
    this.image = loadImage("Sprites/Monster.png");
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display() {  
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}