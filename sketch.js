var mouse, mouseImage1,mouseImage2,mouseImage3;
var cat, catImage1,catImage2,catImage3;
var gardenImage;

function preload() {
    mouseImage1 = loadAnimation("jerryOne.png");
    mouseImage2 = loadAnimation("jerryTwo.png","jerryThree.png");
    mouseImage3 = loadAnimation("jerryFour.png");
    catImage1 = loadAnimation("tomOne.png");
    catImage2 = loadAnimation("tomTwo.png","jerryThree.png");
    catImage3 = loadAnimation("tomFour.png");
    gardenImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(700, 500, 50, 80);
    cat.addAnimation("Running",catImage1);
    cat.scale = 0.1;
    mouse = createSprite(350,500, 80,30);
    mouse.scale = 0.1;
    mouse.addAnimation("standing",mouseImage2);
   

}

function draw() {

    
    background(gardenImage);

    keyPressed();
    
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
       cat.addAnimation("catSitting",catImage3)
       cat.changeAnimation("catSitting")
       cat.velocityX = 0;
    }
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
       mouse.addAnimation("mouseDetective",mouseImage3);
       mouse.changeAnimation("mouseDetective");
     }
    


    
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImage2);
      cat.changeAnimation("catRunning");
   
  }



}
