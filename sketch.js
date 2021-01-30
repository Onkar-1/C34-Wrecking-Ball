const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var building1,building2,building3,building4, building5, building6;

function setup() {
  var canvas = createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500, 790, 3000, 20);

  building1 = new Building(900, 100, 70, 70);
  building2 = new Building(900, 100, 70, 70);
  building3 = new Building(900, 100, 70, 70);
  building4 = new Building(900, 100, 70, 70);
  building5 = new Building(900, 100, 70, 70);
  building6 = new Building(900, 100, 70, 70);

  building7 = new Building(800, 100, 70, 70);
  building8 = new Building(800, 100, 70, 70);
  building9 = new Building(800, 100, 70, 70);
  building10 = new Building(800, 100, 70, 70);
  building11 = new Building(800, 100, 70, 70);
  building12 = new Building(800, 100, 70, 70);

  building13 = new Building(700, 100, 70, 70);
  building14 = new Building(700, 100, 70, 70);
  building15 = new Building(700, 100, 70, 70);
  building16 = new Building(700, 100, 70, 70);
  building17 = new Building(700, 100, 70, 70);
  building18 = new Building(700, 100, 70, 70);

  wreckingball = new Wreckingball(200, 200, 80, 80);
  rope = new Rope(wreckingball.body, {x:500, y:50});
}

function draw() {
  background(0,0,0);  
Engine.update(engine);
  ground.display();
  
  building1.display();
  building2.display();
  building3.display();
  building4.display();
  building5.display();
  building6.display();

  building7.display();
  building8.display();
  building9.display();
  building10.display();
  building11.display();
  building12.display();

  building13.display();
  building14.display();
  building15.display();
  building16.display();
  building17.display();
  building18.display();

  wreckingball.display();
  rope.display();
}

