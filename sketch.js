var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var diver, diver1, diver2, diver3, diver4;

var track, diver1_img, diver2_img, diver3_img, diver4_img;

function preload(){
  track = loadImage("images/Mar2.jpg");
  diver1_img = loadImage("imagenes/Buzo1.png");
  diver2_img = loadImage("imagenes/Buzo2.png");
  diver3_img = loadImage("imagenes/Buzo3.png");
  diver4_img = loadImage("imagenes/Buzo4.png");
  nau_img = loadImage("images/Naufragio.png");
  //ground = loadImage("/images/ground.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
