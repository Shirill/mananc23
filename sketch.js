const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld, myengine;
var box1,box2;
function setup() {
  createCanvas(400,400);
  
  myengine=Engine.create();
  //myworld is myengine's world
  myworld=myengine.world;


  box1=new Box();
  box2=new Box();

}

function draw() {
  background("black");

  Engine.update(myengine);

  box1.display();
  box2.display();
 
  
}