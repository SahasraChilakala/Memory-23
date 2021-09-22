
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution: 0.95,
	  }
	  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  string=Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    length:100,
    stiffness:0.1
  })
  
  ball1 = Bodies.circle(150,200,20,ball_options);
  World.add(world,ball1);
  string=Matter.Constraint.create({
    pointA:{x:250,y:20},
    bodyB:ball1,
    length:100,
    stiffness:0.1
  })
  ball2 = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball2);
  string=Matter.Constraint.create({
    pointA:{x:300,y:20},
    bodyB:ball2,
    length:100,
    stiffness:0.1
  })
  ball3 = Bodies.circle(250,200,20,ball_options);
  World.add(world,ball3);
  string=Matter.Constraint.create({
    pointA:{x:350,y:20},
    bodyB:ball3,
    length:100,
    stiffness:0.1
  })
  ball4 = Bodies.circle(150,200,20,ball_options);
  World.add(world,ball4);
  string=Matter.Constraint.create({
    pointA:{x:400,y:20},
    bodyB:ball4,
    length:100,
    stiffness:0.1
  })





  World.add(world,string)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(Radius);
  background(0);
  
  drawSprites();
 
}



