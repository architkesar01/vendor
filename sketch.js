var canvas
var database;

var appState = 0;
var personCount;
var allPersons;
var form, person, app,who;
var loc
var vender
var bg
function preload(){
vender=loadImage("full.jpg")
}
  



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  bg = createSprite(400,400,displayWidth,displayHeight)
  bg.addImage("displaypicture",vender)
  app = new App();
  app.getState();
  app.start();
}
function draw() {
background(bg)
drawSprites();
}