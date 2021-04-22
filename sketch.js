var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car, bike;
var carImg, bikeImg;
var heli, rocket;
var track;

function preload(){
  carImg = loadImage("images/car.png");
  bikeImg = loadImage("images/bike.png");
  track = loadImage("images/track.jpg");

}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}




function draw(){
  background("red")
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }


}
