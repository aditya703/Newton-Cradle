class Rope{
    constructor(BodyA, PointB){
        var options = {
            bodyA:BodyA,
            pointB:PointB,
            length:200,
            stiffness:0.5
        }
        this.body = Matter.Constraint.create(options);
        this.pointB = PointB;
        World.add(world, this.body);
    }

    display(){
        var PosA = this.body.bodyA.position;
        var PosB = this.pointB;
        strokeWeight(4);
        stroke("white");
        line(PosA.x, PosA.y, PosB.x, PosB.y);
    }
}