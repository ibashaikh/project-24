const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Plane(600, height, 1200, 20)
    irony = new Iron(300, 350)
    hammery = new Hammer(10, 100)
    stony = new Stone(700, 320, 100, 100)
    rubbery = new Rubber(900, 450, 70)


    //create the object
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    ground.display()
    hammery.display()
    irony.display()
    stoney.display()
    rubbery.display()

    //display

 
}
