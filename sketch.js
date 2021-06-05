const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var BackgroundImage;
var monster;
var superhero;
var platform;
var tether;

var Blocks = [];
function preload(){
  BackgroundImage = loadImage("Sprites/Background.png");
}
function setup(){
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  monster = new Monster(600,200,208.5,208.375);
  superhero = new Superhero(200,200,227.5,81.625);
  platform = new Platform(325,300,650,25);
  tether = new Tether(superhero.body,{x:320,y:25});

  for(var i = 250;i > 0;i = i-50){
    Blocks.push(new Block(325,i));
  }
  for(var i = 250;i > 0;i = i-50){
    Blocks.push(new Block(375,i));
  }
  for(var i = 250;i > 0;i = i-50){
    Blocks.push(new Block(425,i));
  }
  for(var i = 250;i > 0;i = i-50){
    Blocks.push(new Block(475,i));
  }
}
function draw(){
  background(BackgroundImage);
  Engine.update(engine);
  strokeWeight(5);

  monster.display();
  superhero.display();
  platform.display();
  tether.display();
  for(var i = 0;i < Blocks.length;i++){
    Blocks[i].display();
  }
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}