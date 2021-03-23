
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ; 
var dustbin1 ; 
var ground1;
var dustbin2 ; 
var dustbin3 ; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball = new paper(200,100,30)
   dustbin1 = new dustbin(700,300,80,10)
   dustbin2 = new dustbin(710,300,10,80)
   dustbin3 = new dustbin(690,300,10,80)
   ground1 = new Ground(400,680,800,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed(){
if ( keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body , ball.body.position, { x:85 , y: -85})
}
}

