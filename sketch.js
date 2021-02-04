const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canvas, backgroundImage;

var gameState = 0;
//var playerCount;
//var allPlayers;
//var distance = 0;
//var database;

//var form, player, game;

var buttons, bA, bB, bC, bD;
var bAI, bBI, bCI, bDI;
var bgI;

function preload(){
  bgI=loadImage("../Images/backgroundB.jpg");

  bAI=loadImage("../Images/bA.jpg");
  bBI=loadImage("../Images/bB.jpg");
  bCI=loadImage("../Images/bC.jpg");
  bDI=loadImage("../Images/bD.jpg");
}

function setup(){
  var canvas = createCanvas(displayWidth-5, displayHeight-115);
  engine = Engine.create();
  world = engine.world;
  //database = firebase.database();
  //game = new Game();
  //game.getState();
  //game.start();
  bA= new CButtons(displayWidth/3-100, displayHeight/2+25,200,100);
  bB= new CButtons(displayWidth/3-100, displayHeight/2+25,300,100);
  bC= new CButtons(displayWidth/3-100, displayHeight/2+25,200,200);
  bD= new CButtons(displayWidth/3-100, displayHeight/2+25,300,200);
}


function draw(){
  background(bgI);
  Engine.update(engine);

  

  bA.display();
  bB.display();
  bC.display();
  bD.display();

  /*if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }*/
}
