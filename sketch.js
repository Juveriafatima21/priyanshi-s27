
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(450,200,600,40);
	bob1=new Bob (200,580,100);
	bob2=new Bob (270,580,100);
    
	rope1=new Rope(bob1.body,roof.body,-230,0);
	rope2=new Rope(bob2.body,roof.body,-120,0);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  
  rope1.display();
  rope2.display();
  bob1.display();
  bob2.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-205,y:-35});

	}
}



