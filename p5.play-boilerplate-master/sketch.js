var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="red"
  movingRect=createSprite(800, 400, 80, 30);
  movingRect.shapeColor="red"

}

function draw() {
  background(0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green" ;
    }
    else{
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red" ;
    
    }

  drawSprites();
}