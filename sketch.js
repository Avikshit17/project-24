
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ball=new Ball(100,600,20)
	 ground=new Ground()
	 side3=new Dustbin(545,640,100,20)
	 side1=new Dustbin(500,600,20,100)
	 side2=new Dustbin(580,600,20,100)
	 



	Engine.run(engine);
  
}


function draw() {
  
  background(0);

 

ground.display()
ball.display() 
side1.display()
side2.display()
side3.display() 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-10.5})
}

}

