class Tether{
    constructor(bodyA,pointB){
        var Options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5            
        }
        this.body = Constraint.create(Options);
        World.add(world,this.body);
        console.log(this.body.bodyA.position + this.body.pointB);
    }
   display(){  
        var bodyA = this.body.bodyA.position;
        var pointB = this.body.pointB;
        strokeWeight(5);
        line(bodyA.x,bodyA.y,pointB.x,pointB.y);           
    }   
}