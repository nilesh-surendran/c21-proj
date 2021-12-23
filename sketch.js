
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,200,45,ball_options)

	World.add(world,ball)

	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1300,600,20,120)

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyPressed === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-1})
	}
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.show()
  leftSide.show()
  rightSide.show()
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,90)
  
  drawSprites();
 
}



