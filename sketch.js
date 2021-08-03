const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy, snowflake;
function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  boy = new boy(700,320,70,70);
  snowflake = new snowflake(150, 305, 300, 170);
   
  
}

function draw() {
  background("background.png");  

  boy.display();
  snowflake.display();

  drawSprites();
}