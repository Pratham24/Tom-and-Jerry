var background, bgImg
var mouse,mouseImg1,mouseImg2,mouseImg3
var cat,catImg1,catImg2,catImg3
function preload() {
    //load the images here
    bgImg =loadImage("garden.png");
    catImg1 =loadAnimation("cat1.png")
    mouseImg1 =loadAnimation("mouse1.png")
    catImg2 =loadAnimation("cat2.png","cat3.png")
    mouseImg2 =loadAnimation("mouse2.png","mouse3.png")
    catImg3=loadAnimation("cat4.png")
    mouseImg3=loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background=createSprite(500,400)
    background.addImage(bgImg)
    background.scale=0.9

    cat=createSprite(800,600)
    cat.addAnimation("cat", catImg1)
    cat.scale=0.2

    mouse=createSprite(150,600,20,20)
    mouse.addAnimation("mouse",mouseImg1)
    mouse.scale=0.09

    mouse.setCollider("circle",0,0,5);


}

function draw() {
    background=(228)

    //Write condition here to evalute if tom and jerry collide
    if(cat.collide(mouse)){
        cat.addAnimation("Stop", catImg3)
        cat.changeAnimation("Stop", catImg3)

        mouse.addAnimation("Stop", mouseImg3)
        mouse.changeAnimation("Stop", mouseImg3)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode == LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2)
      mouse.changeAnimation("mouseTeasing",mouseImg2)

      cat.addAnimation("catComing",catImg2)
      cat.changeAnimation("catComing",catImg2)
      cat.velocityX=-5
      
  }

}
