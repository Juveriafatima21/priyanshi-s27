class Bob  {

constructor(x,y,r) {

 this.x=x
 this.y=y
 this.r=r
 var options={
     isStatic:false,
     restitution:1,
     friction:0,
     density:1
    }
 this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
 World.add(world,this.body);


}

display() {
push();
fill("pink")
ellipseMode(CENTER);
ellipse(this.body.position.x,this.body.position.y,this.r);
pop();
}
}