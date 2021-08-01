const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var blower,blowermouth,ball,button;









function setup() {
  createCanvas(900,900);
  
  engine = Engine.create();
  world = engine.world;
  blower = new Blower(520,600,250,10);
  blowermouth = new BlowerMouth(690,560,100,90);

  ball = new Ball(680,480,80);
  button = createButton("click to blow")
button.position(600,650);
button.size(150,80);
button.mousePressed(blow);

}
function draw() {
  background(255,255,255);  
  Engine.update(engine);
  blower.show();
  blowermouth.show();
  ball.show();
}
function blow (){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.04,y:-0.05});
}