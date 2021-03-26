
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var plane;
var hammer;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    plane = new Plane(600,height,1200,20)
	hammer = new Hammer(100,100);
	stone = new Stone(700,320,70,70);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  plane.display();
  hammer.display();
  stone.display();
  

  drawSprites();
 
}



