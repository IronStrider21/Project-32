
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var box1;
var stone1;
var ball;


function preload()
{

}

function setup() {
	createCanvas(1200, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,750,1200,50);
	ground2 = new Ground(1000,500,200,25);
  ground3 = new Ground(800,400,200,25);
  

	box1 = new Box(1000,475,50,50,);
	box2 = new Box(1000,425,50,50,);
	box3 = new Box(1000,375,50,50,);
	box4 = new Box(1000,325,50,50,);
	box5 = new Box(1000,275,50,50,);

  box6 = new Box(800,375,50,50,);
	box7 = new Box(800,325,50,50,);
	box8 = new Box(800,275,50,50,);
	box9 = new Box(800,225,50,50,);
	box10 = new Box(800,175,50,50,);
	

	//stone1 = new Stone(200,100,50,50);
ball=Bodies.circle(50,200,20);
World.add(world,ball);

	SlingShot = new SlingShot(this.ball,{x:200, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  
  SlingShot.display(); 
//stone1.display();
strokeWeight(3);
        fill(255,0,255)
        ellipse(ball.position.x,ball.position.y,40,40);

  drawSprites();
 
}


function mouseDragged()
{
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    SlingShot.fly();
}


function keyPressed(){
    if (keyCode === 32){
       SlingShot.attach(this.ball)
    }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if (hour>= 06 && hour<=18){
    background=(255);
  } else {
    background=(0);
  }
}