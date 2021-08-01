class Ball{
    constructor(x,y,radius){
    var options = {
        restitution:0.8
    }
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius;
    this.color = color;
    World.add(world,this.body);

    }
    show(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    ellipseMode( CENTER)
    fill("grey");
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}