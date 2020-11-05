const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  bob1 = new Bob(400, 350, 50);
  bob2 = new Bob(500, 350, 50);
  bob3 = new Bob(600, 350, 50);
  bob4 = new Bob(300, 350, 50);
  bob5 = new Bob(200, 350, 50);
  string1 = new Rope(bob1.body, {x:400, y:150});
  string2 = new Rope(bob2.body, {x:500, y:150});
  string3 = new Rope(bob3.body, {x:600, y:150});
  string4 = new Rope(bob4.body, {x:300, y:150});
  string5 = new Rope(bob5.body, {x:200, y:150});
}

function draw(){
  Engine.update(engine);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bob3.body, {x:mouseX, y:mouseY});
}
