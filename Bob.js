class Bob{
    constructor(x, y, radius){
        var options = {
            restitution:1,
            density:10
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var Pos = this.body.position;
        fill("white");
        ellipse(Pos.x, Pos.y, this.radius);
    }
}