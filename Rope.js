class Rope {

    constructor(body1,body2,offsetx,offsety) {
    this.offsetx=offsetx
    this.offsety=offsety
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetx,y:this.offsety}
    }    
    this.rope=Constraint.create(options)
    World.add(world,this.rope);

    }

    display() {

    strokeWeight(3);
    fill("black");  
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.offsetx,this.rope.bodyB.position.y+this.offsety)
    }

}