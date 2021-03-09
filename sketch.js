
var cake,cakeimage;
function preload (){
  cakeimage = loadImage("cake.jpg");
}
function setup (){
   var canvas = createCanvas(1200,400);
  cake = createSprite(600,200);
cake.addImage(cakeimage);
}
function draw (){
drawSprites();
}

